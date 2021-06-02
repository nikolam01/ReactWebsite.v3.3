import "../Assets/CSS/CV.css";
import { Link } from "react-router-dom";
import DownloadLink from "react-download-link";

function CV() {
  return (
    <div className="sectionCV">
      <div className="cv">
        {" "}
        <p
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "6.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            textAlign: "center",
          }}
        >
          <strong>
            <span
              className="titleNM"
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Nikola Mirilo
            </span>
          </strong>
        </p>
        <p
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "8.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            textAlign: "center",
          }}
        >
          <Link href="mailto:nikolamirilo@gmail.com">
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
                color: "#0070C0",
                textDecoration: "none",
              }}
            >
              nikolamirilo@gmail.com
            </span>
          </Link>
          <span
            style={{
              lineHeight: "107%",
              fontFamily: '"Times New Roman",serif',
              color: "#0D0D0D",
            }}
          >
            &nbsp;
          </span>
          <span
            style={{
              lineHeight: "107%",
              fontFamily: '"Times New Roman",serif',
            }}
          >
            | +381 60 427 81 75 |{" "}
            <span
              style={{
                color: "#0070C0",
                border: "none windowtext 1.0pt",
                padding: "0in",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.linkedin.com/in/nikola-mirilo";
              }}
            >
              www.linkedin.com/in/nikola-mirilo
            </span>
          </span>
        </p>
        <div
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "8.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            border: "none",
            borderBottom: "solid windowtext 1.5pt",
            padding: "0in 0in 1.0pt 0in",
          }}
        >
          <p
            style={{
              marginTop: "8.0pt",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              lineHeight: "107%",

              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              border: "none",
              padding: "0in",
            }}
          >
            <strong>
              <span
                style={{
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                EDUCATION
              </span>
            </strong>
          </p>
        </div>
        <p
          style={{
            marginTop: "0in",
            marginRight: "1.3pt",
            marginBottom: "4.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Operational Management
            </span>
          </strong>
        </p>
        <p
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "0in",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <span
            style={{
              lineHeight: "107%",
              fontFamily: '"Times New Roman",serif',
            }}
          >
            University of Belgrade, Faculty of organizational sciences,
          </span>
        </p>
        <p
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "4.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <span
            style={{
              lineHeight: "107%",
              fontFamily: '"Times New Roman",serif',
            }}
          >
            Basic academic studies, department of Management and Organization.
          </span>
        </p>
        <div
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "8.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            border: "none",
            borderBottom: "solid windowtext 1.5pt",
            padding: "0in 0in 1.0pt 0in",
          }}
        >
          <p
            style={{
              marginTop: "8.0pt",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              lineHeight: "107%",

              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              border: "none",
              padding: "0in",
            }}
          >
            <strong>
              <span
                style={{
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                SKILLS
              </span>
            </strong>
          </p>
        </div>
        <p
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "0in",
            marginLeft: "0in",
            lineHeight: "normal",

            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              Technical Skills:&nbsp;
            </span>
          </strong>
          <span
            style={{
              fontFamily: '"Times New Roman",serif',
              color: "#0E101A",
            }}
          >
            Web Development (HTML, CSS, and Java Script), Programming (Python),
            Microsoft Office (Word, Excel, PPT, Access), Git/Git Hub,
            Management, and Organization
          </span>
        </p>
        <p
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "0in",
            marginLeft: "0in",
            lineHeight: "normal",

            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              Soft Skills:&nbsp;
            </span>
          </strong>
          <span
            style={{
              fontFamily: '"Times New Roman",serif',
              color: "#0E101A",
            }}
          >
            Critical Thinking, Communication, Leadership, Teamwork, and Positive
            Attitude
          </span>
        </p>
        <div
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "8.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            border: "none",
            borderBottom: "solid windowtext 1.5pt",
            padding: "0in 0in 1.0pt 0in",
          }}
        >
          <p
            style={{
              marginTop: "8.0pt",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              lineHeight: "107%",

              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              border: "none",
              padding: "0in",
            }}
          >
            <strong>
              <span
                style={{
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                WORK EXPIRIENCE
              </span>
            </strong>
          </p>
        </div>
        <p
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "6.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Internet Technologies Team Member &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;03/2021 – 4/2021
            </span>
          </strong>
        </p>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Project: “Companies to Students”
            </span>
          </li>
          <li>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Building functional website and application for the project
            </span>
          </li>
        </ul>
        <p
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "6.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Corporate Relations Team Member &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;03/2021 – 4/2021
            </span>
          </strong>
        </p>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Project: “Companies to Students”
            </span>
          </li>
          <li>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Searching for sponsors, and sponsorship negotiation
            </span>
          </li>
        </ul>
        <p
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "6.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Academic Relations Team Member&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;12/2020 – 4/2021
            </span>
          </strong>
        </p>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Project: “FON Hackathon and High School Hackathon”
            </span>
          </li>
          <li>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Searching, and inviting professors, and assistants to participate
              in our project
            </span>
          </li>
        </ul>
        <div
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "8.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            border: "none",
            borderBottom: "solid windowtext 1.5pt",
            padding: "0in 0in 1.0pt 0in",
          }}
        >
          <p
            style={{
              marginTop: "8.0pt",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              lineHeight: "107%",

              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              border: "none",
              padding: "0in",
            }}
          >
            <strong>
              <span
                style={{
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                EXTRACURRICULAR ACTIVITIES
              </span>
            </strong>
          </p>
        </div>
        <p
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "6.0pt",
            marginLeft: "0in",
            lineHeight: "normal",

            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#0D0D0D",
              }}
            >
              FONIS – ICT Student’s Association
            </span>
          </strong>
          <strong>
            <span
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            ></span>
          </strong>
        </p>
        <div
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "8.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
          }}
        >
          <ul
            style={{
              marginBottom: "0in",
              listStyleType: "none",
              marginLeft: "0in",
            }}
          >
            <li
              style={{
                marginTop: "0in",
                marginRight: "0in",
                marginBottom: "8.0pt",
                marginLeft: "0in",
                lineHeight: "107%",

                fontFamily: '"Calibri",sans-serif',
              }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Working on the intern and extern projects, and learning multiple
                technologies.
              </span>
            </li>
          </ul>
        </div>
        <p
          style={{
            marginTop: "4.0pt",
            marginRight: "0in",
            marginBottom: "4.0pt",
            marginLeft: "0in",
            lineHeight: "normal",

            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              Creating, and deploying personal website
            </span>
          </strong>
        </p>
        <ul style={{ listStyleType: "none", marginLeft: "0in" }}>
          <li>
            <span
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              Building personal website using HTML, CSS for version 1, HTML,
              Bootstrap, and Java Script for version 2, and HTML, React, Mongo
              DB, Node JS, and Netlify platform.
            </span>
          </li>
          <li>
            <span
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              Website link:&nbsp;
            </span>
            <span
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#0070C0",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "http://nikolamirilo.netlify.app/";
              }}
            >
              https://nikolamirilo.netlify.app/
            </span>
          </li>
        </ul>
        <div
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "8.0pt",
            marginLeft: "0in",
            lineHeight: "107%",

            fontFamily: '"Calibri",sans-serif',
            border: "none",
            borderBottom: "solid windowtext 1.5pt",
            padding: "0in 0in 1.0pt 0in",
          }}
        >
          <p
            style={{
              marginTop: "8.0pt",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              lineHeight: "normal",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              border: "none",
              padding: "0in",
            }}
          >
            <strong>
              <span
                style={{
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                LANGUAGES AND INTERESTS
              </span>
            </strong>
          </p>
        </div>
        <p
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "0in",
            marginLeft: "0in",
            lineHeight: "normal",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              Languages:&nbsp;
            </span>
          </strong>
          <span
            style={{
              fontFamily: '"Times New Roman",serif',
              color: "#0E101A",
            }}
          >
            Serbian (Bilingual proficiency), English (Professional working
            proficiency), and German (Elementary proficiency)
          </span>
        </p>
        <p
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "0in",
            marginLeft: "0in",
            lineHeight: "normal",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              Interests:&nbsp;
            </span>
          </strong>
          <span
            style={{
              fontFamily: '"Times New Roman",serif',
              color: "#0E101A",
            }}
          >
            Trained rowing for 6 years and won 20 national championships, and 10
            international championships, training in the gym, playing
            basketball, and learning more about ICT
          </span>
        </p>
      </div>
      <DownloadLink
        id="downloadBtn"
        className="downBtn"
        label="Download my CV"
        filename="myfile.txt"
        exportFile={() => "My cached data"}
      />
    </div>
  );
}
export default CV;
