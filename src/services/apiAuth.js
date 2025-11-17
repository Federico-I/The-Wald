import react from 'react';
import supabase from './supabase';

export async function signup({ fullName, email, password }) {
  const {data, error} = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
};

export async function login({ email, password }) {

  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if(error) throw new Error(error.message);

  return data;
};

export async function getCurrentUser () {

  const { data: session } = supabase.auth.getSession();
  if (!session.session) return null;

  const {data, error} = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
};

export async function logout () {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1 update password or fullname
  let updateData;
  if(password) updateData = { password };
  if(fullName) updateData = {};

  const { data, error } = await supabase.auth.updateUser();

  // 2 upload the avatar image

  // 3 upload avatar in the user
}