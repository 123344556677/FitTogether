import { updateUserInfo } from "Api/Api";
import { getUser } from "Api/Api";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Input, Row } from "reactstrap";
import '../../../components/Profile/Profile.css'
import { toBase64 } from "DynamicFunctions";
import { uploadImageToFirebase } from "DynamicFunctions";
import { updateProfileImage } from "Api/Api";

const UpdateProfile = () => {
  const id = localStorage.getItem("id");
  const [userData, setUserData] = useState();
  const [changedFields, setChangedFields] = useState({});
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    bio: "",
  });
  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUser(id);
      console.log(response, "user reponse----->");
      setUserData(response?.data?.user);
    };
    fetchUserInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setChangedFields((prevChangedFields) => ({
      ...prevChangedFields,
      [name]: true,
    }));
  };

  const handleProfilePicChange = async(e) => {
    const file = e.target.files[0];
    const base64 = await toBase64(file);
    const profileImage = await uploadImageToFirebase(base64);
    const values={
        profileImageUrl:profileImage
    }
    const response=await updateProfileImage(values)
    if(response){
        window?.location?.reload(false)
    }
    

  };
  const submit = async (e) => {
    e.preventDefault();
    const changedValues = {};
    Object.keys(changedFields).forEach((field) => {
      if (changedFields[field]) {
        changedValues[field] = formData[field];
      }
    });
    // Submit only the changed values
      const response = await updateUserInfo(changedValues);
      if (response) {
        window.location.assign("/user/profile");
    }
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
      <Row className="justify-content-center">
        <Col xl={6}>
          <Card className="p-3 card-shadow mb-4">
            <h1 className="text-center">Update Information</h1>
            <p className="login-text mt-2 text-center mb-0">
              Update Your Personal Info!
            </p>
            <hr />
            <div className="text-center">
            <img src={userData?.profilePicture||require('../../../assets/img/images/ps-3.jfif')} alt="profile" className="user-profile-img"/>
            </div>
            <div className="text-center">
            <Button className="mt-4 auth-button signUp-button-color w-50" onClick={() => document.getElementById('fileInput').click()}>
            Change Picture
            </Button>
            <Input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleProfilePicChange}
              />
            </div>
            <Form role="form" className="mt-1 p-1" onSubmit={submit}>
              <Input type="text" className="signup-input input-group-alternative mt-3" name="fname" placeholder="Enter your first name" onChange={handleChange} defaultValue={formData.fname || userData?.fname} required />
              <Input type="text" className="signup-input input-group-alternative mt-3" name="lname" placeholder="Enter your last name" onChange={handleChange} defaultValue={formData.lname || userData?.lname} required  />
              <Input type="email" className="signup-input input-group-alternative mt-3" name="email" placeholder="Enter your email" onChange={handleChange} defaultValue={formData.email || userData?.email} required />
              <Input type="textarea" className="signup-input input-group-alternative mt-3" name="bio" placeholder="Enter your bio" onChange={handleChange} defaultValue={formData.bio || userData?.bio} required />
              <div className="text-center">
                <Button
                  className="mt-4 auth-button signUp-button-color"
                  color="primary"
                  type="submit"
                >
                  Update Account
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UpdateProfile;
