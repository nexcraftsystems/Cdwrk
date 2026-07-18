import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";
import { 
  initializeFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  orderBy,
  serverTimestamp,
  getDocFromServer
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN4nQ_rGGbZtDT4f62HC7IVj-PlL9CNSM",
  authDomain: "codwork-865f9.firebaseapp.com",
  projectId: "codwork-865f9",
  storageBucket: "codwork-865f9.firebasestorage.app",
  messagingSenderId: "417674656990",
  appId: "1:417674656990:web:e2a11f390248148150564f",
  measurementId: "G-NLLS1FEK0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
export const googleProvider = new GoogleAuthProvider();

// Standard Waitlist Entry type
export interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  notes: string;
  timestamp: string;
}

// Ensure the Google provider forces account selection
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Error handling helper in accordance with Firebase Integration Skill
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Validate connection to Firestore on initialization as mandated by the skill
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn("Firestore connection check: client is offline or starting up.");
    }
  }
}
// We do not run this synchronously on module load to prevent sandbox initialization errors
// testConnection();

// Google login flow restricted to wanahmadzaimwr99@gmail.com
export async function loginWithGoogle(): Promise<User> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    if (user.email !== 'wanahmadzaimwr99@gmail.com') {
      await signOut(auth);
      throw new Error("unauthorized_email");
    }
    
    return user;
  } catch (error) {
    console.error("Google Auth Error:", error);
    throw error;
  }
}

// Submit a waitlist entry to Firebase
export async function submitWaitlistEntry(entry: Omit<WaitlistEntry, 'id' | 'timestamp'>): Promise<string> {
  const path = 'waitlist';
  try {
    const docRef = await addDoc(collection(db, path), {
      ...entry,
      createdAt: serverTimestamp(),
      // Store local timestamp string for visual representation
      timestamp: new Date().toLocaleString()
    });
    return docRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
    return '';
  }
}

// Fetch waitlist entries from Firebase Firestore (ordered by createdAt desc)
export async function fetchWaitlistEntries(): Promise<WaitlistEntry[]> {
  const path = 'waitlist';
  try {
    const q = query(collection(db, path), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const entries: WaitlistEntry[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      entries.push({
        id: doc.id,
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        company: data.company || '',
        service: data.service || '',
        notes: data.notes || '',
        timestamp: data.timestamp || new Date().toLocaleString()
      });
    });
    
    return entries;
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
}

// Delete waitlist entry from Firebase
export async function deleteWaitlistEntry(id: string): Promise<void> {
  const path = `waitlist/${id}`;
  try {
    await deleteDoc(doc(db, 'waitlist', id));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}
