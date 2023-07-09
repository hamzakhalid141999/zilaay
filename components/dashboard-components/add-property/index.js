import React from "react";
import classes from "./add-property.module.css";
import property_preview_pic from "../../../public/assets/dashboard/property_preview_pic.png";
import check_symbol from "../../../public/assets/dashboard/check_icon.svg";
import PropertyDemoCard from "../../cards/property-demo-card";

function AddProperty() {
  return (
    <div className={classes.container}>
      <div className={classes.overlay} />

      <div className={classes.stepper_container}>
        <div className={classes.single_stepper_container}>
          <div className={classes.single_step}>
            <img src={check_symbol.src}/>
            <p>Step 1</p>
          </div>
          <div className={classes.step_line}></div>
        </div>

        <div className={classes.single_stepper_container}>
          <div className={classes.single_step_disabled}>
            <p>Step 2</p>
          </div>
          <div className={classes.step_line_disabled}></div>
        </div>

        <div className={classes.single_stepper_container}>
          <div className={classes.single_step_disabled}>
            <p>Step 3</p>
          </div>
          <div className={classes.step_line_disabled}></div>
        </div>

        <div className={classes.single_stepper_container}>
          <div className={classes.single_step_disabled}>
            <p>Step 4</p>
          </div>
          <div className={classes.step_line_disabled}></div>
        </div>

        <div className={classes.single_stepper_container}>
          <div className={classes.single_step_disabled}>
            <p>Step 5</p>
          </div>
          <div className={classes.step_line_disabled}></div>
        </div>

        <div className={classes.single_stepper_container}>
          <div className={classes.single_step_disabled}>
            <p>Step 6</p>
          </div>
        </div>
      </div>

      <div className={classes.content_container}>
        <div className={classes.forms_container}>
          <div className={classes.single_form_container}>
            <h2 className={classes.heading}>
              STEP 1 - <span> Purpose Property Type & Location</span>
            </h2>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Purpose</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.dual_container}>
              <div className={classes.input_field_container}>
                <p className={classes.label}>Property Type</p>
                <input className={classes.input_field} />
              </div>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>City</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Location</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.dual_container}>
              <div className={classes.input_field_container}>
                <p className={classes.label}>Reference</p>
                <input className={classes.input_field} />
              </div>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Address</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Google Plus Code</p>
              <input className={classes.input_field} />
            </div>
          </div>

          <div className={classes.single_form_container}>
            <h2 className={classes.heading}>
              STEP 2 - <span> Property Specs & Price</span>
            </h2>

            <div
              style={{ gridTemplateColumns: "5fr 1fr" }}
              className={classes.dual_container}
            >
              <div className={classes.input_field_container}>
                <p className={classes.label}>Size / Area</p>
                <input className={classes.input_field} />
              </div>
              <input className={classes.input_field} />
            </div>

            <div className={classes.dual_container}>
              <div className={classes.input_field_container}>
                <p className={classes.label}>Property Type</p>
                <input className={classes.input_field} />
              </div>
              <input className={classes.input_field} />
            </div>

            <div className={classes.dual_container}>
              <div className={classes.input_field_container}>
                <p className={classes.label}>Property Type</p>
                <input className={classes.input_field} />
              </div>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Location</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.dual_container}>
              <div className={classes.input_field_container}>
                <p className={classes.label}>Reference</p>
                <input className={classes.input_field} />
              </div>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Address</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Google Plus Code</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Google Plus Code</p>
              <input className={classes.input_field} />
            </div>
          </div>

          <div className={classes.single_form_container}>
            <h2 className={classes.heading}>
              STEP 3 - <span> Property Title & Description</span>
            </h2>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Purpose</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.dual_container}>
              <div className={classes.input_field_container}>
                <p className={classes.label}>Property Type</p>
                <input className={classes.input_field} />
              </div>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>City</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Location</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.dual_container}>
              <div className={classes.input_field_container}>
                <p className={classes.label}>Reference</p>
                <input className={classes.input_field} />
              </div>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Address</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Google Plus Code</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Google Plus Code</p>
              <input className={classes.input_field} />
            </div>
          </div>

          <div className={classes.single_form_container}>
            <h2 className={classes.heading}>
              STEP 4 - <span> Images & Videos</span>
            </h2>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Purpose</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.dual_container}>
              <div className={classes.input_field_container}>
                <p className={classes.label}>Property Type</p>
                <input className={classes.input_field} />
              </div>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>City</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Location</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.dual_container}>
              <div className={classes.input_field_container}>
                <p className={classes.label}>Reference</p>
                <input className={classes.input_field} />
              </div>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Address</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Google Plus Code</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Google Plus Code</p>
              <input className={classes.input_field} />
            </div>
          </div>

          <div className={classes.single_form_container}>
            <h2 className={classes.heading}>
              STEP 5 - <span> Contact Details</span>
            </h2>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Purpose</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.dual_container}>
              <div className={classes.input_field_container}>
                <p className={classes.label}>Property Type</p>
                <input className={classes.input_field} />
              </div>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>City</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Location</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.dual_container}>
              <div className={classes.input_field_container}>
                <p className={classes.label}>Reference</p>
                <input className={classes.input_field} />
              </div>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Address</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Google Plus Code</p>
              <input className={classes.input_field} />
            </div>

            <div className={classes.input_field_container}>
              <p className={classes.label}>Google Plus Code</p>
              <input className={classes.input_field} />
            </div>
          </div>
        </div>

        <div className={classes.property_card_container}>
          <div className={classes.property_card_text_container}>
            <h2>Upload your property details</h2>
            <p>Get the best value for your property in a few steps.</p>
          </div>
          <PropertyDemoCard />
          <div className={classes.pic_overlay} />
          <img
            src={property_preview_pic.src}
            className={classes.img_container}
          />
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
