import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data: cabins, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  console.log('getCabins()', cabins);
  return cabins;
}
