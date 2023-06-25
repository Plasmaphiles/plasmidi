import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.APPWRITE_URL) // Your API Endpoint
  .setProject(process.env.APPWRITE_PROJECT_ID); // Your project ID

const account = new Account(client);

const useAuth = () => {
  const createAccount = (email, password, username) =>
    account.create(ID.unique(), email, password, username);

  const login = (email, password) =>
    account.createEmailSession(email, password);

  const loggedInUser = account.get();

  return {
    createAccount,
    login,
    loggedInUser,
  };
};

export default useAuth;
