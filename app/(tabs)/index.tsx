import { Redirect } from 'expo-router';

export default function Index() {
  // Esto redireccionará automáticamente de / a /home
  return <Redirect href="/home" />;
}