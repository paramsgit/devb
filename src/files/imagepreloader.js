import React, { useEffect, useState } from 'react';
import { Dummy } from './dummy';
export const Imagepreloader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);

      useEffect(() => {
        const imageUrls = [
            '../static/admin.jpg', 
            '../static/ando.png', 
            '../static/att1.jpg', 
            '../static/att9.jpg', 
            '../static/banner-backgroundm1.jpg', 
            '../static/banner-foreground.png', 
            '../static/blueb2.jpg', 
            '../static/cf1.jpg', 
            '../static/cf2.jpg', 
            '../static/cf3.jpg', 
            '../static/cf4.jpg', 
            '../static/cf5.jpg', 
            '../static/comp.jpg', 
            '../static/css.png', 
            '../static/gate2.jpg', 
            '../static/gate9.jpg', 
            '../static/github-mark.png', 
            '../static/github-mark.svg', 
            '../static/html5.png', 
            '../static/htmlpng.png', 
            '../static/ipad2.png', 
            '../static/ipadblue.png', 
            '../static/ipadpng.png', 
            '../static/ipadwithhostel.png', 
            '../static/js.png', 
            '../static/macwc.png', 
            '../static/mess2.jpg', 
            '../static/mobile4.jpg', 
            '../static/mongodb.png', 
            '../static/mp1.png', 
            '../static/mp2.png', 
            '../static/mp3.png', 
            '../static/nitjlogo.png', 
            '../static/node.png', 
            '../static/photo2.jpg', 
            '../static/photo7.jpg', 
            '../static/photo8.jpg', 
            '../static/photo72.jpg', 
            '../static/Plogo.png', 
            '../static/plogo2.png', 
            '../static/pseb.png', 
            '../static/pslogo.png', 
            '../static/python.png', 
            '../static/react.png', 
            '../static/rest.png', 
            '../static/room3.jpg', 
            '../static/tabletphone.png', 
            '../static/tailwind.png', 
            '../static/temp2.jpg', 
            '../static/threep.png', 
            '../static/threep2.png', 
            
            // ... add more image paths as needed
          ];
        
            const totalImages = imageUrls.length;
            let loadedImages = 0;
        
            const preloadImages = image => {
              return new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = image.url
                loadImg.onload = () => {
                  loadedImages++;
                  setProgress(parseInt((loadedImages / totalImages) * 100));
                  resolve(image.url);
                };
                loadImg.onerror = err => reject(err)
                
              });
            }
            Promise.all(imageUrls.map(image => preloadImages(image)))
            .then(() => setIsLoading(true))
            .catch(err => console.log("Failed to load images", err))
      
           
          }, []);
     

 
          return (
            <>
              <main className="images">
                {isLoading ? (
                  children
                ) : (
                  <h1>Loading images... {progress}</h1>
                )}
              </main>
            </>
          )
        }

