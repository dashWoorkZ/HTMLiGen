
 
 const getIcons = document.getElementById('getIcon').addEventListener('click', getIc);
                const msg = document.getElementById('msg');
                function getIc(e) {
                    e.preventDefault();
                    const start = document.getElementById('start');
                    const end = document.getElementById('end');
                    const icons = document.getElementById('icons')
                    const startV = start.value;
                    const endV = end.value;
                    icons.innerHTML = "";
                    
                    for(var i = startV; i < endV; i++) {
                        if(typeof startV === typeof endV || startV > endV) { 
                            const div = document.createElement("div");
                            div.classList.add('igenned');
                            const span = document.createElement("span");
                            span.classList.add('uni');
                            const h1 = document.createElement("h1");
                            h1.classList.add('icon');
                            span.innerText = `&#${i};`;
                            h1.innerHTML = `&#${i};`;
                            div.appendChild(span);
                            div.appendChild(h1);
                            icons.appendChild(div);
                           
                        } else {
                             msg.innerHTML = '<p>Please Enter Numerals Only in Ascending Order</p>'; 
                         }                      
                    }
                }
               
