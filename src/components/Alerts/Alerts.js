import { toast } from "react-toastify";
export const successAlert = (message) => {
  toast.success(message,{
    theme:"light"
  });
};
export const errorAlert = (message) => {
  toast.error(message,{
    theme:"light"
  });
};
