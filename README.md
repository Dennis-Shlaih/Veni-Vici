# Web Development Project 4 - *Veni-Vici*

Submitted by: **Dennis Shlaih**

This web app: **Veni-Vici is a React app utilizes the RAWG Video Games Database API, which provides access to a comprehensive collection of video game data. This app can help users discover video games, and see their essential attributes such as the name, release date, and genre. Users can ban specific attributes by clicking on them, placing them on a ban list. Users can use this ability to filter for certain games, or explore new content.**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [X] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image should be consistent across API calls (i.e. if you are using a cat API, and display the color, breed, and age in response to an initial API call, subsequent button clicks should also result in the color, breed, and age being displayed)
- [X] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time 
  - Displayed attributes should match the displayed image (i.e., if showing a picture of a Siamese cat and the attribute breed, the displayed breed should be 'Siamese' not 'Ragdoll' or another breed that doesn't match)
  - There is at least one image per API call
- [X] **API call response results should appear random to the user**
  - Clicking on the API call button should generate a seemingly random new result each time
  - Note: Repeat results are permitted but the API used should have a reasonably large amount of data and repeats should not be frequent
- [X] **Clicking on a displayed value for one attribute adds it to a displayed ban **list**
  - At least one attribute for each API result should be clickable
  - Clicking on a clickable attribute not on the ban list, should imnmediately add it to the ban list 
  - Clicking on an attribute in the ban list should immediately remove it from the ban list 
- [X] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button should not result in any image/attributes with attribute values in the ban list being displayed (ex. Using a cat API, if the ban list includes the value 'Siberian' for the breed attribute, clicking on the Discover button should never result in a Siberian cat being displayed)
  - Note: More attribute values on the ban list may result in a higher frequency of repeat results
  -  [X] _To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_


The following **optional** features are implemented:

- [X] Multiple types of attributes are clickable and can be added to the ban list
- [ ] Users can see a stored history of their previously displayed  results from this session
  - A dedicated section of the application displays all the previous images/attributes seen before
  - Each time the API call button is clicked, the history updates with the newest API result

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Veni-Vici Walkthrough](https://github.com/user-attachments/assets/4c672549-650e-43b6-bc5f-ac1fdcca86e1)

GIF created with Microsoft Clipchamp  

## Challenges

- [X] Integrating the RAWG API required  debugging to properly structure fetch requests and handle dynamic filtering. Implementing logic to exclude banned attributes like name, genre, or release date from future results added complexity to the state management.
- [X] Ensuring that banned attributes filtered out unwanted games without breaking the app required implementing a recursive fetch logic. The function needed to repeatedly call the API until a non-banned game was retrieved, while avoiding infinite loops or crashes, which took several tries to perfect.
- [X] Managing the ban list and adding functionality to dynamically unban items required thoughtful design of event handling and state updates using React.

## License

    Copyright [2025] [Dennis Shlaih]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
