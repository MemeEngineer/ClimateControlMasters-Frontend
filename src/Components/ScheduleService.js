import React from "react";

function ScheduleService() {



  return (
    <div>
      <form style={{ display: "flex" }} >
            <div>
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="firstname"
                  
                />
              </div>
              <div>
                <label>Last Name </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="lastname"
                  
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  
                />
              </div>

              <div>
                <label>Telephone </label>
                <input
                  type="text"
                  name="telephone"
                  placeholder="Telephone"
                  
                />
              </div>
              <div>
                <label>Subject </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="subject"
                  
                />
              </div>
              <div>
                <label>Service Jobs: </label>
                <input type="checkbox" name="installation" placeholder="installation" value="installation"/> Installation
                <input type="checkbox" name="replacement" placeholder="replacement" value="replacement"/> Replacement
                <input type="checkbox" name="ac-repair" placeholder="ac-repair" value="ac-repair"/> AC Repair
                <input type="checkbox" name="ac-service" placeholder="ac-service" value="ac-service"/> AC Service
                <input type="checkbox" name="heater-repair" placeholder="heater-repair" value="heater-repair"/> Heater Repair
                <input type="checkbox" name="heater-service" placeholder="heater-service" value="heater-service"/> Heater Service
                <input type="checkbox" name="air-duct-cleaning" placeholder="air-duct-cleaning" value="air-duct-cleaning"/> Air Duct Cleaning
                <input type="checkbox" name="other" placeholder="other" value="other"/> Other
              </div>
              <div>
                <label>Message </label>
                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  style= {{width:"500px", height: "300px"}}
                />
              </div>
            </div>
          </form>
          <button className="button" type="submit">
              Send Message
            </button>
    </div>
  );
}

export default ScheduleService;