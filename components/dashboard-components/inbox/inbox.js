import React from "react";
import classes from "./inbox.module.css";
import three_dot from "../../../public/assets/dashboard/three_dot.svg";

function Inbox() {
  return (
    <div className={classes.container}>
      <div className={classes.heading_bar}>
        <h2>Inbox</h2>
        <div className={classes.heading_right_panel}>
          <div className={classes.user_profile}>
            <div className={classes.profile_picture}></div>
            <div className={classes.profile_name_section}>
              <h3 className={classes.name}>Noman Shahid</h3>
              <p className={classes.name_title}>User</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.inbox_section}>
        <div className={classes.inbox_list}>
          <div className={classes.overlay} />
          <div
            style={{ marginTop: "20px" }}
            className={classes.single_inbox_selected}
          >
            <div className={classes.inbox_content}>
              <img src={three_dot.src} className={classes.three_dot} />
              <div className={classes.single_inbox_profile_picture}></div>
              <div className={classes.single_inbox_profile_name_section}>
                <div>
                  <h3 className={classes.single_inbox_name}>Mike</h3>
                  <p className={classes.single_inbox_name_title}>Agent</p>
                </div>
                <p className={classes.single_inbox_message}>
                  Type message here..
                </p>
              </div>
            </div>
          </div>
          <div className={classes.single_inbox}>
            <div className={classes.inbox_content}>
              <img src={three_dot.src} className={classes.three_dot} />
              <div className={classes.single_inbox_profile_picture}></div>
              <div className={classes.single_inbox_profile_name_section}>
                <div>
                  <h3 className={classes.single_inbox_name}>Mike</h3>
                  <p className={classes.single_inbox_name_title}>Agent</p>
                </div>
                <p className={classes.single_inbox_message}>
                  Type message here..
                </p>
              </div>
            </div>
          </div>
          <div className={classes.single_inbox}>
            <div className={classes.inbox_content}>
              <img src={three_dot.src} className={classes.three_dot} />
              <div className={classes.single_inbox_profile_picture}></div>
              <div className={classes.single_inbox_profile_name_section}>
                <div>
                  <h3 className={classes.single_inbox_name}>Mike</h3>
                  <p className={classes.single_inbox_name_title}>Agent</p>
                </div>
                <p className={classes.single_inbox_message}>
                  Type message here..
                </p>
              </div>
            </div>
          </div>
          <div className={classes.single_inbox}>
            <div className={classes.inbox_content}>
              <img src={three_dot.src} className={classes.three_dot} />
              <div className={classes.single_inbox_profile_picture}></div>
              <div className={classes.single_inbox_profile_name_section}>
                <div>
                  <h3 className={classes.single_inbox_name}>Mike</h3>
                  <p className={classes.single_inbox_name_title}>Agent</p>
                </div>
                <p className={classes.single_inbox_message}>
                  Type message here..
                </p>
              </div>
            </div>
          </div>
          <div className={classes.single_inbox}>
            <div className={classes.inbox_content}>
              <img src={three_dot.src} className={classes.three_dot} />
              <div className={classes.single_inbox_profile_picture}></div>
              <div className={classes.single_inbox_profile_name_section}>
                <div>
                  <h3 className={classes.single_inbox_name}>Mike</h3>
                  <p className={classes.single_inbox_name_title}>Agent</p>
                </div>
                <p className={classes.single_inbox_message}>
                  Type message here..
                </p>
              </div>
            </div>
          </div>
          <div className={classes.single_inbox}>
            <div className={classes.inbox_content}>
              <img src={three_dot.src} className={classes.three_dot} />
              <div className={classes.single_inbox_profile_picture}></div>
              <div className={classes.single_inbox_profile_name_section}>
                <div>
                  <h3 className={classes.single_inbox_name}>Mike</h3>
                  <p className={classes.single_inbox_name_title}>Agent</p>
                </div>
                <p className={classes.single_inbox_message}>
                  Type message here..
                </p>
              </div>
            </div>
          </div>
          <div className={classes.single_inbox}>
            <div className={classes.inbox_content}>
              <img src={three_dot.src} className={classes.three_dot} />
              <div className={classes.single_inbox_profile_picture}></div>
              <div className={classes.single_inbox_profile_name_section}>
                <div>
                  <h3 className={classes.single_inbox_name}>Mike</h3>
                  <p className={classes.single_inbox_name_title}>Agent</p>
                </div>
                <p className={classes.single_inbox_message}>
                  Type message here..
                </p>
              </div>
            </div>
          </div>
          <div className={classes.single_inbox}>
            <div className={classes.inbox_content}>
              <img src={three_dot.src} className={classes.three_dot} />
              <div className={classes.single_inbox_profile_picture}></div>
              <div className={classes.single_inbox_profile_name_section}>
                <div>
                  <h3 className={classes.single_inbox_name}>Mike</h3>
                  <p className={classes.single_inbox_name_title}>Agent</p>
                </div>
                <p className={classes.single_inbox_message}>
                  Type message here..
                </p>
              </div>
            </div>
          </div>
          <div className={classes.single_inbox}>
            <div className={classes.inbox_content}>
              <img src={three_dot.src} className={classes.three_dot} />
              <div className={classes.single_inbox_profile_picture}></div>
              <div className={classes.single_inbox_profile_name_section}>
                <div>
                  <h3 className={classes.single_inbox_name}>Mike</h3>
                  <p className={classes.single_inbox_name_title}>Agent</p>
                </div>
                <p className={classes.single_inbox_message}>
                  Type message here..
                </p>
              </div>
            </div>
          </div>
          <div className={classes.single_inbox}>
            <div className={classes.inbox_content}>
              <img src={three_dot.src} className={classes.three_dot} />
              <div className={classes.single_inbox_profile_picture}></div>
              <div className={classes.single_inbox_profile_name_section}>
                <div>
                  <h3 className={classes.single_inbox_name}>Mike</h3>
                  <p className={classes.single_inbox_name_title}>Agent</p>
                </div>
                <p className={classes.single_inbox_message}>
                  Type message here..
                </p>
              </div>
            </div>
          </div>
          <div className={classes.single_inbox}>
            <div className={classes.inbox_content}>
              <img src={three_dot.src} className={classes.three_dot} />
              <div className={classes.single_inbox_profile_picture}></div>
              <div className={classes.single_inbox_profile_name_section}>
                <div>
                  <h3 className={classes.single_inbox_name}>Mike</h3>
                  <p className={classes.single_inbox_name_title}>Agent</p>
                </div>
                <p className={classes.single_inbox_message}>
                  Type message here..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.chat_section}>
          <div className={classes.chat_list_container}>
            <div className={classes.chat_section}>
              <div className={classes.date_container}>
                <p>Today, May 13th</p>
              </div>

              <div className={classes.msg_right_container}>
                <div className={classes.message_profile}>
                  <div className={classes.message_profile_picture}></div>
                  <div className={classes.message_profile_name_section}>
                    <h3 className={classes.message_name}>Noman Shahid</h3>
                    <p className={classes.message_name_title}>User</p>
                  </div>
                </div>
                <div className={classes.left_msg_container}>
                  <p>Hey! How're you?</p>
                </div>
                <div className={classes.left_msg_container}>
                  <p>
                    I heard you're getting the tickets from another place, is
                    that true?
                  </p>
                </div>
              </div>

              <div className={classes.msg_left_container}>
                <div
                  style={{ flexDirection: "row-reverse" }}
                  className={classes.message_profile}
                >
                  <div className={classes.message_profile_picture}></div>
                  <div
                    style={{ alignItems: "flex-end" }}
                    className={classes.message_profile_name_section}
                  >
                    <h3 className={classes.message_name}>Noman Shahid</h3>
                    <p className={classes.message_name_title}>User</p>
                  </div>
                </div>
                <div className={classes.right_msg_container}>
                  <p>
                    I heard you're getting the tickets from another place, is
                    that true?
                  </p>
                </div>
                <div className={classes.right_msg_container}>
                  <p>Yeah that's true</p>
                </div>
              </div>

              <div className={classes.msg_right_container}>
                <div className={classes.message_profile}>
                  <div className={classes.message_profile_picture}></div>
                  <div className={classes.message_profile_name_section}>
                    <h3 className={classes.message_name}>Noman Shahid</h3>
                    <p className={classes.message_name_title}>User</p>
                  </div>
                </div>
                <div className={classes.left_msg_container}>
                  <p>Okay that's good, can you send me the contacts?</p>
                </div>

                <div className={classes.left_msg_container}>
                  <p>And kindly tell me the timings too</p>
                </div>
              </div>

              <div className={classes.msg_left_container}>
                <div
                  style={{ flexDirection: "row-reverse" }}
                  className={classes.message_profile}
                >
                  <div className={classes.message_profile_picture}></div>
                  <div
                    style={{ alignItems: "flex-end" }}
                    className={classes.message_profile_name_section}
                  >
                    <h3 className={classes.message_name}>Noman Shahid</h3>
                    <p className={classes.message_name_title}>User</p>
                  </div>
                </div>
                <div className={classes.right_msg_container}>
                  <p>
                    I heard you're getting the tickets from another place, is
                    that true?
                  </p>
                </div>
                <div className={classes.right_msg_container}>
                  <p>Yeah that's true</p>
                </div>
              </div>

              <div className={classes.msg_right_container}>
                <div className={classes.message_profile}>
                  <div className={classes.message_profile_picture}></div>
                  <div className={classes.message_profile_name_section}>
                    <h3 className={classes.message_name}>Noman Shahid</h3>
                    <p className={classes.message_name_title}>User</p>
                  </div>
                </div>
                <div className={classes.left_msg_container}>
                  <p>Okay that's good, can you send me the contacts?</p>
                </div>

                <div className={classes.left_msg_container}>
                  <p>And kindly tell me the timings too</p>
                </div>
              </div>

              <div className={classes.msg_left_container}>
                <div
                  style={{ flexDirection: "row-reverse" }}
                  className={classes.message_profile}
                >
                  <div className={classes.message_profile_picture}></div>
                  <div
                    style={{ alignItems: "flex-end" }}
                    className={classes.message_profile_name_section}
                  >
                    <h3 className={classes.message_name}>Noman Shahid</h3>
                    <p className={classes.message_name_title}>User</p>
                  </div>
                </div>
                <div className={classes.right_msg_container}>
                  <p>
                    I heard you're getting the tickets from another place, is
                    that true?
                  </p>
                </div>
                <div className={classes.right_msg_container}>
                  <p>Yeah that's true</p>
                </div>
              </div>

              <br />
            </div>
          </div>
          <div className={classes.message_typewriter_area}>
            <textarea
              placeholder="Write a message here.."
              className={classes.msg_input_field}
            />
            <div className={classes.btns_container}>
              <div className={classes.send_btn}>
                <p>Send</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
