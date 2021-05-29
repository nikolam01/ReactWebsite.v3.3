import "../Assets/CSS/CV.css";
import { Link } from "react-router-dom";

function CV() {
  //Not sure about this
  /*axios({
    method: "get",
    url: { cv },
    responseType: "arraybuffer",
  })
    .then((response) => {
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/octet-stream" })
      );
      link.download = "name_of_file_with_extension";

      document.body.appendChild(link);

      link.click();
      setTimeout(function () {
        window.URL.revokeObjectURL(link);
      }, 200);
    })
    .catch((error) => {});*/
  //for button to download file

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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "center",
          }}
        >
          <strong>
            <span
              style={{
                fontSize: "32px",
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "center",
          }}
        >
          <a href="mailto:nikolamirilo@gmail.com">
            <span
              style={{
                fontSize: "19px",
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
                color: "#0070C0",
                textDecoration: "none",
              }}
            >
              nikolamirilo@gmail.com
            </span>
          </a>
          <span
            style={{
              fontSize: "19px",
              lineHeight: "107%",
              fontFamily: '"Times New Roman",serif',
              color: "#0D0D0D",
            }}
          >
            &nbsp;
          </span>
          <span
            style={{
              fontSize: "19px",
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
                background: "white",
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
            fontSize: "15px",
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
              fontSize: "15px",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              border: "none",
              padding: "0in",
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "21px",
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontSize: "19px",
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Operational Management&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;10/2019 - Present &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <span
            style={{
              fontSize: "19px",
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <span
            style={{
              fontSize: "19px",
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
            fontSize: "15px",
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
              fontSize: "15px",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              border: "none",
              padding: "0in",
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "21px",
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontSize: "19px",
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              Technical Skills:&nbsp;
            </span>
          </strong>
          <span
            style={{
              fontSize: "19px",
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontSize: "19px",
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              Soft Skills:&nbsp;
            </span>
          </strong>
          <span
            style={{
              fontSize: "19px",
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
            fontSize: "15px",
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
              fontSize: "15px",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              border: "none",
              padding: "0in",
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "21px",
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontSize: "19px",
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Internet Technologies Team Member&nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;03/2021 – 4/2021
            </span>
          </strong>
        </p>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
                fontSize: "19px",
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
                fontSize: "19px",
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontSize: "19px",
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Corporate Relations Team Member&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;03/2021 – 4/2021
            </span>
          </strong>
        </p>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
                fontSize: "19px",
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
                fontSize: "19px",
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontSize: "19px",
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Academic Relations Team Member&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;12/2020 – 4/2021
            </span>
          </strong>
        </p>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            <span
              style={{
                lineHeight: "107%",
                fontFamily: '"Times New Roman",serif',
                fontSize: "19px",
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
                fontSize: "19px",
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
            fontSize: "15px",
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
              fontSize: "15px",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              border: "none",
              padding: "0in",
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "21px",
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontSize: "19px",
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
                fontSize: "19px",
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;10/2020 – Present
            </span>
          </strong>
        </p>
        <div
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "8.0pt",
            marginLeft: "0in",
            lineHeight: "107%",
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
          }}
        >
          <ul
            style={{
              marginBottom: "0in",
              listStyleType: "disc",
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
                fontSize: "15px",
                fontFamily: '"Calibri",sans-serif',
              }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman",serif',
                  fontSize: "19px",
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontSize: "19px",
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              Creating, and deploying personal website&nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1/2020 – 1/2021
            </span>
          </strong>
        </p>
        <ul style={{ listStyleType: "disc", marginLeft: "0in" }}>
          <li>
            <span
              style={{
                fontFamily: '"Times New Roman",serif',
                fontSize: "14.0pt",
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
                fontSize: "14.0pt",
                color: "#0E101A",
              }}
            >
              Website link:&nbsp;
            </span>
            <u>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>
                https://nikolamirilo.netlify.app/
              </span>
            </u>
          </li>
        </ul>
        <div
          style={{
            marginTop: "0in",
            marginRight: "0in",
            marginBottom: "8.0pt",
            marginLeft: "0in",
            lineHeight: "107%",
            fontSize: "15px",
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
              fontSize: "15px",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              border: "none",
              padding: "0in",
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "21px",
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontSize: "19px",
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              Languages:&nbsp;
            </span>
          </strong>
          <span
            style={{
              fontSize: "19px",
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
            fontSize: "15px",
            fontFamily: '"Calibri",sans-serif',
            textAlign: "justify",
          }}
        >
          <strong>
            <span
              style={{
                fontSize: "19px",
                fontFamily: '"Times New Roman",serif',
                color: "#0E101A",
              }}
            >
              Interests:&nbsp;
            </span>
          </strong>
          <span
            style={{
              fontSize: "19px",
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

      <Link
        id="downloadBtn"
        to="../Assets/Docs/NikolaMirilo.pdf"
        target="_blank"
        download
      >
        Download my CV
      </Link>
    </div>
  );
}
export default CV;
