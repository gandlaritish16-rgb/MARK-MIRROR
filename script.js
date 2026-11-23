// =====================================
// MARKMIRROR - COMPLETE JAVASCRIPT
// =====================================

// SAMPLE DATABASE - DEMO DATA ONLY

const students = {
    "26AIDS001": {
        name: "Divya",
        ticket: "26AIDS001",
        branch: "CSE - AIDS",
        semester: "Semester 1",
        sgpa: 8.65,
        cgpa: 8.65,
        subjects: [
            {name:"Mathematics",internal:25,external:60,total:85,grade:"A+",status:"PASS"},
            {name:"Programming in C",internal:24,external:58,total:82,grade:"A+",status:"PASS"},
            {name:"DBMS",internal:23,external:55,total:78,grade:"A",status:"PASS"},
            {name:"Computer Networks",internal:22,external:53,total:75,grade:"A",status:"PASS"},
            {name:"Python Programming",internal:24,external:59,total:83,grade:"A+",status:"PASS"},
            {name:"English",internal:23,external:57,total:80,grade:"A+",status:"PASS"}
        ]
    },

    "26AIDS002": {
        name:"Bharath",
        ticket:"26AIDS002",
        branch:"CSE - AIDS",
        semester:"Semester 1",
        sgpa:8.64,
        cgpa:8.64,
        subjects:[
            {name:"Mathematics",internal:23,external:55,total:78,grade:"A",status:"PASS"},
            {name:"Programming in C",internal:22,external:56,total:78,grade:"A",status:"PASS"},
            {name:"DBMS",internal:24,external:54,total:78,grade:"A",status:"PASS"},
            {name:"Computer Networks",internal:21,external:52,total:73,grade:"B+",status:"PASS"},
            {name:"Python Programming",internal:23,external:55,total:78,grade:"A",status:"PASS"},
            {name:"English",internal:22,external:54,total:76,grade:"A",status:"PASS"}
        ]
    },

    "26AIDS003": {
        name:"Vinootna",
        ticket:"26AIDS003",
        branch:"CSE - AIDS",
        semester:"Semester 1",
        sgpa:8.40,
        cgpa:8.40,
        subjects:[
            {name:"Mathematics",internal:24,external:57,total:81,grade:"A+",status:"PASS"},
            {name:"Programming in C",internal:23,external:58,total:81,grade:"A+",status:"PASS"},
            {name:"DBMS",internal:22,external:56,total:78,grade:"A",status:"PASS"},
            {name:"Computer Networks",internal:23,external:53,total:76,grade:"A",status:"PASS"},
            {name:"Python Programming",internal:24,external:55,total:79,grade:"A",status:"PASS"},
            {name:"English",internal:23,external:56,total:79,grade:"A",status:"PASS"}
        ]
    },

    "26AIDS004": {
         name:"Amuktha",
         ticket:"26AIDS107",
         branch:"CSE - AIDS",
         semester:"Semester 1",
         sgpa:8.60,
         cgpa:8.60,
         subjects:[
            {name:"Mathematics",internal:22,external:54,total:75,grade:"A",status:"PASS"},
            {name:"Programming in C",internal:23,external:56,total:80,grade:"A+",status:"PASS"},
            {name:"DBMS",internal:24,external:52,total:77,grade:"A",status:"PASS"},
            {name:"Computer Networks",internal:25,external:55,total:77,grade:"A",status:"PASS"},
            {name:"Python Programming",internal:22,external:54,total:81,grade:"A",status:"PASS"},
            {name:"English",internal:25,external:53,total:80,grade:"A",status:"PASS"}
        ]
    },
"26AIDS005": {
    name: "Hussian",
    ticket: "26AIDS005",
    branch: "CSE - AIDS",
    semester: "Semester 1",
    sgpa: 8.65,
    cgpa: 8.65,
    subjects: [
        { name: "Mathematics", internal: 25, external: 65, total: 90, grade: "A+", status: "Pass" },
        { name: "Programming in C", internal: 24, external: 64, total: 88, grade: "A+", status: "Pass" },
        { name: "DBMS", internal: 23, external: 62, total: 85, grade: "A", status: "Pass" },
        { name: "Computer Networks", internal: 22, external: 60, total: 82, grade: "A", status: "Pass" },
        { name: "Python Programming", internal: 24, external: 63, total: 87, grade: "A+", status: "Pass" },
        { name: "AI Fundamentals", internal: 23, external: 61, total: 84, grade: "A", status: "Pass" }
    ]
},

"26AIDS006": {
    name: "Sutheksha",
    ticket: "26AIDS006",
    branch: "CSE - AIDS",
    semester: "Semester 1",
    sgpa: 8.10,
    cgpa: 8.10,
    subjects: [
        { name: "Mathematics", internal: 26, external: 68, total: 94, grade: "A+", status: "Pass" },
        { name: "Programming in C", internal: 25, external: 67, total: 92, grade: "A+", status: "Pass" },
        { name: "DBMS", internal: 24, external: 65, total: 89, grade: "A+", status: "Pass" },
        { name: "Computer Networks", internal: 25, external: 64, total: 89, grade: "A+", status: "Pass" },
        { name: "Python Programming", internal: 26, external: 66, total: 92, grade: "A+", status: "Pass" },
        { name: "AI Fundamentals", internal: 24, external: 65, total: 89, grade: "A+", status: "Pass" }
    ]
},

"26AIDS007": {
    name: "Anushka",
    ticket: "26AIDS007",
    branch: "CSE - AIDS",
    semester: "Semester 1",
    sgpa: 8.90,
    cgpa: 8.90,
    subjects: [
        { name: "Mathematics", internal: 24, external: 65, total: 89, grade: "A+", status: "Pass" },
        { name: "Programming in C", internal: 23, external: 64, total: 87, grade: "A+", status: "Pass" },
        { name: "DBMS", internal: 25, external: 63, total: 88, grade: "A+", status: "Pass" },
        { name: "Computer Networks", internal: 24, external: 62, total: 86, grade: "A", status: "Pass" },
        { name: "Python Programming", internal: 25, external: 64, total: 89, grade: "A+", status: "Pass" },
        { name: "AI Fundamentals", internal: 23, external: 63, total: 86, grade: "A", status: "Pass" }
    ]
},

"26AIDS008": {
    name: "Mallika",
    ticket: "26AIDS008",
    branch: "CSE - AIDS",
    semester: "Semester 1",
    sgpa: 8.50,
    cgpa: 8.50,
    subjects: [
        { name: "Mathematics", internal: 23, external: 62, total: 85, grade: "A", status: "Pass" },
        { name: "Programming in C", internal: 22, external: 61, total: 83, grade: "A", status: "Pass" },
        { name: "DBMS", internal: 24, external: 60, total: 84, grade: "A", status: "Pass" },
        { name: "Computer Networks", internal: 23, external: 59, total: 82, grade: "A", status: "Pass" },
        { name: "Python Programming", internal: 22, external: 62, total: 84, grade: "A", status: "Pass" },
        { name: "AI Fundamentals", internal: 24, external: 60, total: 84, grade: "A", status: "Pass" }
    ]
},

"26AIDS009": {
    name: "Rakesh",
    ticket: "26AIDS009",
    branch: "CSE - AIDS",
    semester: "Semester 1",
    sgpa: 9.20,
    cgpa: 9.20,
    subjects: [
        { name: "Mathematics", internal: 22, external: 60, total: 82, grade: "A", status: "Pass" },
        { name: "Programming in C", internal: 21, external: 59, total: 80, grade: "A", status: "Pass" },
        { name: "DBMS", internal: 22, external: 58, total: 80, grade: "A", status: "Pass" },
        { name: "Computer Networks", internal: 21, external: 57, total: 78, grade: "B+", status: "Pass" },
        { name: "Python Programming", internal: 23, external: 59, total: 82, grade: "A", status: "Pass" },
        { name: "AI Fundamentals", internal: 22, external: 58, total: 80, grade: "A", status: "Pass" }
    ]
},

"26AIDS010": {
    name: "Ritish",
    ticket: "26AIDS010",
    branch: "CSE - AIDS",
    semester: "Semester 1",
    sgpa: 8.35,
    cgpa: 8.35,
    subjects: [
        { name: "Mathematics", internal: 20, external: 57, total: 77, grade: "B+", status: "Pass" },
        { name: "Programming in C", internal: 21, external: 56, total: 77, grade: "B+", status: "Pass" },
        { name: "DBMS", internal: 20, external: 55, total: 75, grade: "B+", status: "Pass" },
        { name: "Computer Networks", internal: 22, external: 54, total: 76, grade: "B+", status: "Pass" },
        { name: "Python Programming", internal: 21, external: 57, total: 78, grade: "B+", status: "Pass" },
        { name: "AI Fundamentals", internal: 20, external: 56, total: 76, grade: "B+", status: "Pass" }
    ]
}
};
// COMMON ELEMENTS

const $ = id => document.getElementById(id);

$("year").textContent = new Date().getFullYear();

let currentStudent = null;

// MOBILE MENU

$("menuToggle").addEventListener("click", () => {
    $("navLinks").classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        $("navLinks").classList.remove("active");
    });
});

// 1. SEARCH RESULTS

function searchStudent() {
    const ticket = $("hallTicket").value.trim().toUpperCase();
    const message = $("message");
    const result = $("resultSection");

    message.className = "";
    message.textContent = "";
    result.hidden = true;

    if (!ticket) {
        message.className = "error";
        message.textContent = "Please enter your hall ticket number.";
        return;
    }

    const student = students[ticket];

    if (!student) {
        message.className = "error";
        message.textContent = "Student not found. Check your hall ticket number.";
        currentStudent = null;
        return;
    }

    currentStudent = student;

    $("studentName").textContent = student.name;
    $("studentTicket").textContent = student.ticket;
    $("studentBranch").textContent = student.branch;
    $("studentSemester").textContent = student.semester;
    $("studentSGPA").textContent = student.sgpa.toFixed(2);
    $("subjectCount").textContent = student.subjects.length;

    const total = student.subjects.reduce(
        (sum, subject) => sum + subject.total, 0
    );

    $("totalMarks").textContent = total;

    const allPassed = student.subjects.every(
        subject => subject.status === "PASS"
    );

    $("resultStatus").textContent = allPassed ? "PASS" : "FAIL";

    $("marksTableBody").innerHTML = student.subjects.map(subject => `
        <tr>
            <td>${subject.name}</td>
            <td>${subject.internal}</td>
            <td>${subject.external}</td>
            <td>${subject.total}</td>
            <td>${subject.grade}</td>
            <td class="${subject.status === "PASS" ? "pass" : "fail"}">
                ${subject.status}
            </td>
        </tr>
    `).join("");

    result.hidden = false;

    message.className = "success";
    message.textContent = "Result found successfully!";

    // Automatically update analytics
    showAnalytics(student);

    result.scrollIntoView({behavior:"smooth",block:"start"});
}

$("searchBtn").addEventListener("click", searchStudent);

$("hallTicket").addEventListener("keydown", event => {
    if (event.key === "Enter") searchStudent();
});

// 2. PRINT MARKSHEET

$("printBtn").addEventListener("click", () => {
    if (!currentStudent) {
        alert("Please search a student result first.");
        return;
    }
    window.print();
});

// 3. SGPA CALCULATOR

$("calculateBtn").addEventListener("click", () => {
    const pointsText = $("gradePoints").value.trim();
    const creditsText = $("credits").value.trim();
    const output = $("gpaOutput");
    const message = $("gpaMessage");

    output.hidden = true;
    message.className = "";

    if (!pointsText || !creditsText) {
        message.className = "error";
        message.textContent = "Please enter grade points and credits.";
        return;
    }

    const points = pointsText.split(",").map(Number);
    const credits = creditsText.split(",").map(Number);

    if (
        points.length !== credits.length ||
        points.some(p => !Number.isFinite(p) || p < 0 || p > 10) ||
        credits.some(c => !Number.isFinite(c) || c <= 0)
    ) {
        message.className = "error";
        message.textContent = "Enter valid grade points (0–10) and positive credits. Both lists must have equal numbers.";
        return;
    }

    const totalCredits = credits.reduce((a,b) => a+b, 0);
    const weightedPoints = points.reduce(
        (sum, point, i) => sum + point * credits[i], 0
    );

    const sgpa = weightedPoints / totalCredits;

    output.innerHTML = `
        <div>Your SGPA</div>
        <strong>${sgpa.toFixed(2)}</strong>
        <div style="font-size:13px;margin-top:10px">
            Total Credits: ${totalCredits}
        </div>
    `;

    output.hidden = false;
    message.className = "success";
    message.textContent = "Calculation completed successfully!";
});

// 4. SUBJECT ANALYTICS

function showAnalytics(student) {

    const container = $("analyticsContent");

    const subjects = Object.keys(students).flatMap(
        ticket => students[ticket].subjects
    );

    const subjectNames = [...new Set(
        subjects.map(s => s.name)
    )];

    const totalStudents = Object.keys(students).length;

    const analytics = subjectNames.map(name => {

        const records = subjects.filter(s => s.name === name);

        const passed = records.filter(
            s => s.status === "PASS"
        ).length;

        const percentage = (passed / totalStudents) * 100;

        return {
            name,
            passed,
            percentage
        };
    });

    container.innerHTML = `
        <h3>Batch Subject Pass Analytics</h3>

        <p>Sample Students: ${totalStudents}</p>

        ${analytics.map(s => `
            <div class="analytics-row">
                <span>
                    ${s.name} -
                    ${s.percentage.toFixed(0)}% Pass
                </span>

                <div class="analytics-track">
                    <div class="analytics-fill"
                         style="width:${s.percentage}%">
                    </div>
                </div>
            </div>
        `).join("")}
    `;
}
// 5. TOP 10 LEADERBOARD

const ranking = Object.values(students)
    .sort((a, b) => b.cgpa - a.cgpa)
    .slice(0, 10);

$("leaderboardBody").innerHTML = ranking.map(
    (student, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.ticket}</td>
            <td>${student.cgpa.toFixed(2)}</td>
        </tr>
    `
).join("");

// 6. CGPA DISTRIBUTION

const ranges = [
    {label:"Below 7.0",min:0,max:7},
    {label:"7.0 – 7.9",min:7,max:8},
    {label:"8.0 – 8.9",min:8,max:9},
    {label:"9.0 – 10",min:9,max:10.01}
];

const distribution = ranges.map(range => ({
    ...range,
    count: Object.values(students).filter(s =>
        s.cgpa >= range.min && s.cgpa < range.max
    ).length
}));

const maxCount = Math.max(1,...distribution.map(r => r.count));

$("distributionChart").innerHTML = distribution.map(range => `
    <div class="distribution-row">
        <strong>${range.label} (${range.count} students)</strong>
        <div class="distribution-track">
            <div class="distribution-fill"
                style="width:${range.count/maxCount*100}%">
            </div>
        </div>
    </div>
`).join("");
// 7. CGPA CALCULATOR

$("cgpaBtn").addEventListener("click", () => {

    const gpaInput = $("semesterGPAs").value.trim();
    const creditInput = $("semesterCredits").value.trim();
    const output = $("cgpaOutput");

    output.hidden = false;

    if (!gpaInput || !creditInput) {
        output.textContent = "Please enter semester SGPAs and credits.";
        return;
    }

    const gpas = gpaInput.split(",").map(Number);
    const credits = creditInput.split(",").map(Number);

    if (
        gpas.length !== credits.length ||
        gpas.some(v => !Number.isFinite(v) || v < 0 || v > 10) ||
        credits.some(v => !Number.isFinite(v) || v <= 0)
    ) {
        output.textContent = "Enter valid SGPA values (0–10) and positive credits. Both lists must have equal numbers.";
        return;
    }

    const totalCredits = credits.reduce((a, b) => a + b, 0);

    const weightedTotal = gpas.reduce(
        (sum, gpa, i) => sum + gpa * credits[i], 0
    );

    const cgpa = weightedTotal / totalCredits;

    output.innerHTML = `
        <h3>Your CGPA: ${cgpa.toFixed(2)}</h3>
        <p>Total Credits: ${totalCredits}</p>
        <p>Calculation completed successfully!</p>
    `;
});

// =================================
// MARKMIRROR - SCROLL REVEAL
// =================================

const revealElements = document.querySelectorAll(
    '.section-heading, .feature-card, .about-content, .results-section, #cgpa-distribution'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.classList.add('reveal');
    revealObserver.observe(element);
});