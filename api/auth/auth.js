import axios from "axios";
import { BASE_URL } from "../../constants";

const signIn = async (email, password) => {
  const data = await axios.post(
    `${BASE_URL}/auth/signInByEmail?email=${email}&password=${password}`,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const signInByEmail = async (email, password) => {
  const data = await axios.get(
    `${BASE_URL}/auth/signInByEmail?email=${email}&password=${password}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data?.data;
};

const signInByUsername = async (email, password) => {
  const data = await axios.post(
    `${BASE_URL}/auth/signInByUsername?email=${email}&password=${password}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const signUpAsEndUser = async (username, email, password) => {
  const data = await axios.post(`${BASE_URL}/auth/signUp`, {
    username: username,
    email: email,
    password: password,
    type: "enduser",
  });
};

const signUpAsBuilder = async (
  username,
  email,
  password,
  mobileNumber,
  builderName,
  builderAddress,
  builderEmail,
  builderMobile,
  builderWhatsappNumber,
  builderCity,
) => {
  const data = await axios.post(`${BASE_URL}/auth/signUp`, {
    username: username,
    email: email,
    password: password,
    type: "builder",
    builderName: builderName,
    mobileNumber: mobileNumber,
    city: builderCity,
    address: builderAddress,
    additionalEmail: builderEmail,
    additionalMobileNumber: builderMobile,
    whatsappNumber: builderWhatsappNumber
  });
};

const signUpAsAgency = async (
  username,
  email,
  password,
  mobileNumber,
  agencyName,
  agencyCity,
  agencyEmail,
  agencyMobileNumber,
  agencyWhatsappNumber,
) => {
  const data = await axios.post(`${BASE_URL}/auth/signUp`, {
    username: username,
    email: email,
    password: password,
    mobileNumber: mobileNumber,
    type: "agency",
    agencyName: agencyName,
    agencyCity: agencyCity,
    agencyEmail: agencyEmail,
    agencyMobileNumber: agencyMobileNumber,
    agencyWhatsappNumber: agencyWhatsappNumber
  });
};

export {
  signIn,
  signInByEmail,
  signUpAsEndUser,
  signInByUsername,
  signUpAsBuilder,
  signUpAsAgency,
};
