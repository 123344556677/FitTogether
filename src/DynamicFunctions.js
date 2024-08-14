import { loadStripe } from "@stripe/stripe-js";
import storage from "Api/firebase";
import { getDownloadURL, ref, uploadBytes, uploadString } from "firebase/storage";
import moment from "moment";

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
  const nameArray = name?.split(" ");
  // Extract the first letter of the first word
  const firstNameInitial = nameArray[0]?.charAt(0)?.toUpperCase();
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
// export const uploadBlobVideoToFirebase = async (blob) => {
//   const videoRef = 'recorded-videos/' + Date.now();
//   const storageRef = ref(storage, videoRef);

//   try {
//     const snapshot = await uploadBytes(storageRef , blob)
//     console.log('Uploaded a blob or file!', snapshot);

//     // Get the URL of the uploaded image location
//     const url = await getDownloadURL(storageRef);
//     console.log(url, "Firebase URL");

//     return url;
//   } catch (error) {
//     console.error("Error uploading image to Firebase:", error);
//     throw error; // Optionally re-throw the error for handling elsewhere
//   }
// };

export const uploadBlobVideoToFirebase = async (file) => {
  const videoRef = `recorded-videos/${Date.now()}`;
  const storageRef = ref(storage, videoRef);

  try {
    const metadata = {
      contentType: file.type,
    };

    const snapshot = await uploadBytes(storageRef, file, metadata);
    console.log('Uploaded a blob or file!', snapshot);

    // Get the URL of the uploaded video location
    const url = await getDownloadURL(storageRef);
    console.log(url, "Firebase URL");

    return url;
  } catch (error) {
    console.error("Error uploading video to Firebase:", error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
};

export const TimeDifference = (startDate) => {
  const endDate = moment(); // Current date

  const daysDifference = endDate.diff(startDate, 'days');
  const hoursDifference = endDate.diff(startDate, 'hours');
  const minutesDifference = endDate.diff(startDate, 'minutes');
  const secondsDifference = endDate.diff(startDate, 'seconds');

  if (daysDifference === 0) {
    if (hoursDifference === 0) {
      if (minutesDifference === 0) {
        return `${secondsDifference} seconds`;
      }
      return `${minutesDifference} minutes`;
    }
    return `${hoursDifference} hours`;
  }

  return `${daysDifference} days`;
};

export const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
export const uploadImageToFirebase = async (base64Video) => {
  const fileName = Date.now() + ".jpg";
  const fileRef = ref(storage, fileName);

  try {
    const snapshot = await uploadString(fileRef, base64Video, "data_url");
    console.log("Uploaded a blob or file!", snapshot);

    // Get the URL of the uploaded image location
    const url = await getDownloadURL(fileRef);
    console.log(url, "Firebase URL");

    return url;
  } catch (error) {
    console.error("Error uploading image to Firebase:", error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
};
