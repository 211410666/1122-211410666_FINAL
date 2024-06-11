import { da } from 'date-fns/locale';
import supabase from './supabase';
export const login = async ({ email, password }) => {
  console.log('login data', email, password);
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) throw new Error(error.message);
  console.log('login()->data', data);
  return data;
};

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession(); 
  if (!session) return null;

  const { data, error } = await supabase.auth.getUser();
  console.log('getCurrentUser Data', data);
  if (error) throw new Error(error.message);
  return data?.user;
}

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}