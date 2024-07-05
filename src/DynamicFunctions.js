import { loadStripe } from "@stripe/stripe-js";
import storage from "Api/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getColorPalette = (index, parentColors, childColors) => {
  const parentColor = parentColors[index % parentColors.length];
  const childColor = childColors[index % childColors.length];
  return { parentColor, childColor };
};

export const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const getInitials = (name) => {
  // Split the name into words
  const nameArray = name.split(" ");
  // Extract the first letter of the first word
  const firstNameInitial = nameArray[0].charAt(0).toUpperCase();
  // Return the first letter of the first name
  return firstNameInitial;
};

export const setLocalStorage = (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, value);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
export const uploadBlobVideoToFirebase = async (blob) => {
  const videoRef = 'recorded-videos/' + Date.now();
  const storageRef = ref(storage, videoRef);

  try {
    const snapshot = await uploadBytes(storageRef , blob)
    console.log('Uploaded a blob or file!', snapshot);

    // Get the URL of the uploaded image location
    const url = await getDownloadURL(storageRef);
    console.log(url, "Firebase URL");

    return url;
  } catch (error) {
    console.error("Error uploading image to Firebase:", error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
};
