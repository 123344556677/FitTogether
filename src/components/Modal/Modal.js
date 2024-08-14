import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Card,
  Row,
  Col,
  Button,
  Media,
  Form,
  Input,
} from "reactstrap";
import MultiSelectWithTags from "components/DynamicInputs/MultipleSelect";
import backgroundImage from "../../assets/img/images/ps-1.jpg";
import { getQuery } from "Api/Api";
import "./Modal.css";
import { updateQuery } from "Api/Api";
import { useNavigate } from "react-router-dom";
import { commentVideo } from "Api/Api";

const DynamicModal = ({ isOpen, toggle, view, title,value }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [signupQuery, setSignUpQuery] = useState([]);
  const [formValid, setFormValid] = useState(false);
  const [comment, setComment] = useState();
  const navigate=useNavigate();
console.log(value,"comment values------->")
  useEffect(() => {
    const fetchQuery = async () => {
      try {
        const response = await getQuery();
        console.log(response, "query response---->");
        setSignUpQuery(response?.data?.signupQuestions || []);
        initializeSelectedOptions(response?.data?.signupQuestions || []);
      } catch (error) {
        console.error("Error fetching signup questions:", error);
      }
    };
    fetchQuery();
  }, [value]);

  useEffect(() => {
    setFormValid(validateForm());
  }, [selectedOptions]);

  const initializeSelectedOptions = (questions) => {
    const initialOptions = {};
    questions.forEach((question) => {
      initialOptions[question.key] = [];
    });
    setSelectedOptions(initialOptions);
  };

  const handleSelect = (selectedValues, name) => {
    setSelectedOptions({ ...selectedOptions, [name]: selectedValues });
  };

  const validateForm = () => {
    // Check if all keys in selectedOptions have at least one value
    for (const key in selectedOptions) {
      if (selectedOptions[key].length === 0) {
        return false;
      }
    }
    return true;
  };

  const submit = async(e) => {
    e.preventDefault();
    if (view === "signupQuery" && formValid) {
      console.log("Form is valid, submitting...");
      const response= await updateQuery(selectedOptions,value)
       await updateQuery(selectedOptions,value)
      console.log(response,"response----values-->")
      navigate('/login')
      // Perform your form submission logic here
    } else {
      console.log("Form is not valid or view is not signupQuery");
    }
  };
  const handleComment=async()=>{
    const values={
      text:comment
    }
    const response=await commentVideo(value?._id,values)
    if(response){
      window?.location?.reload(false)
    }



  }

  console.log(selectedOptions, "selected option");


  let content;

  switch (view) {
    case "comments":
      content = (
        <div>
        {
          value?.comments?.map((data,index)=>(
          <Media className="mt-3" key={index}>
            <Media>
              <Media
                object
                src={data?.profilePicture||"https://picsum.photos/id/123/1200/600"}
                alt="Profile"
                className="community-profile-img"
              />
            </Media>
            <Media body className="ml-3">
              <h4 className="mb-0">{data?.userId?.fname} {data?.userId?.lname}</h4>
              <span className="goat-label mt-2">
                {data.text}
              </span>
            </Media>
          </Media>
          ))
        }
          <Input
          type="text"
          placeholder="Add a comment"
          className="mt-4 login-input input-group-alternative"
          onChange={(e)=>setComment(e.target.value)}
          />
          <Button className="login-button-color mt-3  auth-button" onClick={handleComment}>Add</Button>
        </div>
      );
      break;
    case "signupQuery":
      content = (
        <div
          style={{
            background: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Row className="justify-content-center">
            <Col xl={6}>
              <Card className="p-2 card-shadow m-4">
                {signupQuery.map((question, index) => (
                  <div key={index} className="m-3">
                    <h5>{question.question}</h5>
                    <MultiSelectWithTags
                      options={question.options.map((option) => ({
                        value: option,
                        label: option,
                      }))}
                      placeholder={question.question}
                      selectedValues={selectedOptions[question.key] || []}
                      handleSelect={handleSelect}
                      name={question.key}
                    />
                  </div>
                ))}
                <Button
                  className="mt-4 auth-button signUp-button-color"
                  type="submit"
                  onClick={submit}
                  disabled={!formValid}
                >
                  Submit
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      );
      break;
    default:
      content = null;
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="custom-modal">
      <ModalHeader toggle={toggle}>
        <h1 className="text-center">{title}</h1>
      </ModalHeader>
      <ModalBody>{content}</ModalBody>
    </Modal>
  );
};

export default DynamicModal;
