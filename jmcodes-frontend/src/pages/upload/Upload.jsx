import React, { useState } from "react";
import { postRequest } from "../../config/axiosConfig";

export const Upload = () => {

  /**
    * From the form data we get the Headers required to post a new blog post. 
    */
  const getHeaderData = () => {

  }


  /**
    * Gets the user blog input and sends it to get published.
    */
  const getContent = () => {

  }

  const handleFormUpload = () => {
    const endpointUrl = `/blogposts/`;
    
    const header = getHeaderData();
    
    const data = getContent();

    postRequest(endpointUrl,header, data); 
  }

  return (
    <div>
    <form>
      <input type="text" />
      <button type="submit" onClick={() => handleFormUpload()}> Submit </button> 
    </form>
    </div>
  )

}

