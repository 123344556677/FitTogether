import { errorAlert } from "components/Alerts/Alerts";
import { successAlert } from "components/Alerts/Alerts";

// apiWrapper.js
const apiWrapper = async (apiCall) => {
  try {
    const response = await apiCall();
      successAlert(response?.data?.message)
    return response;
  } catch (error) {
    console.error("API call error:", error);
    return errorAlert(error?.response?.data?.err)
  }
  
};

export default apiWrapper;
