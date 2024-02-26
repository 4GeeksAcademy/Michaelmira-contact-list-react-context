import React, { useState, useEffect } from 'react';

const FetchAll = () => {
    useEffect(() => {
      const apiUrl = "https://playground.4geeks.com/apis/fake/contact/user/michaelmira";
  
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch todo list. Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log("Todo list from API", data);
        })
        .catch(error => {
          console.error("Error fetching todo list:", error.message);
        });
    }, []); // Empty dependency array to run the effect only once on mount
  return null
}

export default FetchAll