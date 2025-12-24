import { redirect } from 'next/navigation';

// Team page is disabled per compliance requirements
// Redirecting users to contact page instead
export default function TeamPage() {
  redirect('/contact');
}
