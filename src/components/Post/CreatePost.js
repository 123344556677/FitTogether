import React, { useState, useRef } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import './Post.css'
import { uploadBlobVideoToFirebase } from "DynamicFunctions";
import { uploadVideo } from "Api/Api";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [description, setDescription] = useState("");
  const [videoError, setVideoError] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef(null);
  const navigate=useNavigate()

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const video = document.createElement("video");
      video.src = URL.createObjectURL(file);
      video.onloadedmetadata =async () => {
        if (video.duration > 15) {
          setVideoError("Video length must be 15 seconds or less");
          setVideoFile(null);
        } else {
          setVideoError("");
          setVideoFile(file);
          const response =await uploadBlobVideoToFirebase(videoUrl);
          setVideoUrl(response)
        }
      };
    }
  };

  const handleUpload = async () => {
    // Handle the upload logic here
    console.log("Uploading:", videoFile, description);
    const values={
        videoUrl: videoUrl,
        title:description
    }
    await uploadVideo(values)
    navigate("/user/community")
    
    
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
     <h1 className="subscription-heading p-3">
          Upload Video to <br /> share with community.{" "}
        </h1>
        <hr/>
      <Row className="justify-content-center">
        <Col xl={8} className="p-3 text-center video-box">
          <div
            className="d-flex flex-column align-items-center justify-content-center border mb-3"
            style={{ width: "100%", height: "300px",position:"relative" }}
          >
            {videoFile ? (
              <video
                ref={videoRef}
                controls
                style={{ width: "100%", height: "100%" }}
                src={URL.createObjectURL(videoFile)}
              />
            ) : (
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px dashed #ccc",
                }}
              >
                <span>Click to upload a video (max 15 seconds)</span>
                <Input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                  }}
                />
              </div>
            )}
          </div>
          {videoError && <p style={{ color: "red" }}>{videoError}</p>}
              <Input
                type="textarea"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter a description for the video"
                style={{maxHeight:"300px",height:"150px"}}
              />
            
            <Button
              className="mt-5 login-button-color auth-button w-75"
              color="primary"
              type="submit"
              onClick={handleUpload}
            >
              Upload Video
            </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CreatePost;
