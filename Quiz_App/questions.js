const quizQuestions = [
  {
    "question": "[1] Which of the following is NOT a primary reason for choosing R programming for marketing \nanalytics over Excel, as discussed in the lecture?",
    "options": [
      "R is better suited for larger data sizes where Excel becomes limited.",
      "R is open source and freely available, unlike Excel which is proprietary.",
      "R has a huge online community support and resources.",
      "R's user interface is inherently more intuitive and user-friendly than Excel's for marketing analytics tasks."
    ],
    "correctAnswer": "R's user interface is inherently more intuitive and user-friendly than Excel's for marketing analytics tasks.",
    "explanation": "R's user interface is inherently more intuitive and user-friendly than Excel's for marketing analytics tasks. The lecturer explicitly states that RStudio's UI is more user-friendly than R's own UI, but doesn't claim it's universally  more intuitive or user-friendly than Excel's UI. The other options are direct benefits mentioned for choosing R."
  },
  {
    "question": "[1] According to the lecture, what is the main limitation of Microsoft Excel when dealing with large \ndatasets?",
    "options": [
      "Excel requires a paid license, unlike open-source alternatives.",
      "Excel struggles with data sizes where the number of rows exceeds approximately 6 lakhs.",
      "Excel lacks the sophisticated statistical functions required for advanced marketing analytics.",
      "Excel files are prone to corruption with complex formulas."
    ],
    "correctAnswer": "Excel struggles with data sizes where the number of rows exceeds approximately 6 lakhs.",
    "explanation": "Excel struggles with data sizes where the number of rows exceeds approximately 6 lakhs. The lecturer specifically mentions that Excel becomes limited when the data size, or number of rows, is more than 6  lakhs (01:31.280 - 01:34.369)."
  },
  {
    "question": "[1] Why is R programming preferred over Python for the marketing analytics course, as per the \ninstructor's explanation?",
    "options": [
      "Python is a proprietary software, while R is open source.",
      "R has a larger and more active community for marketing analytics specific tasks.",
      "R is more suited for research-oriented work, whereas Python is often used for software deployment and \nautomated problem-solving.",
      "Python's syntax is considerably more complex than R's for beginners."
    ],
    "correctAnswer": "R is more suited for research-oriented work, whereas Python is often used for software deployment and \nautomated problem-solving.",
    "explanation": "R is more suited for research-oriented work, whereas Python is often used for software deployment and  automated problem-solving. The lecturer states that 'Python is more used in... for the deployment; when you create a software which will be  deployed for an automated kind of problem solving. But R is more good for research oriented work.' (02:12.260 -  02:27.890)."
  },
  {
    "question": "[1] What are the two primary advantages of R programming highlighted in the lecture?",
    "options": [
      "It has a graphical user interface and advanced visualization tools.",
      "It is open source and has huge community support.",
      "It is faster for computations and can handle all data types.",
      "It integrates seamlessly with other Microsoft Office products and is easy to learn."
    ],
    "correctAnswer": "It is open source and has huge community support.",
    "explanation": "It is open source and has huge community support. The lecturer explicitly states, 'But we have chosen R, because one reason it is open source. The second reason is it has  huge support.' (01:52.889 - 01:58.849)."
  },
  {
    "question": "[1] Which institution does Dr. Swagato Chatterjee represent?",
    "options": [
      "Indian Institute of Management Bangalore",
      "Vinod Gupta School of Management, IIT Kharagpur",
      "Indian School of Business Hyderabad",
      "Faculty of Management Studies, University of Delhi"
    ],
    "correctAnswer": "Vinod Gupta School of Management, IIT Kharagpur",
    "explanation": "Vinod Gupta School of Management, IIT Kharagpur The instructor introduces himself as 'Dr. Swagato Chatterjee, Vinod Gupta School of Management, IIT  Kharagpur' (00:20.670 - 00:22.570)."
  },
  {
    "question": "[1] Where should a user go to download the base R programming software?",
    "options": [
      "RStudio's official website",
      "GitHub repositories for R projects",
      "The CRAN R project website (by searching 'Cran R' or 'R download')",
      "Microsoft Store or Apple App Store"
    ],
    "correctAnswer": "The CRAN R project website (by searching 'Cran R' or 'R download')",
    "explanation": "The CRAN R project website (by searching 'Cran R' or 'R download') The lecturer instructs to 'go to this particular link. You can also go to Google and search for Cran R or something like  that or R download or something like that. It will ultimately lead you to this particular link.' (03:18.960 - 03:28.990)."
  },
  {
    "question": "[1] What is the recommended approach for installing R and RStudio?",
    "options": [
      "Install RStudio first, then R.",
      "Install R first, then RStudio.",
      "Install both simultaneously for better compatibility.",
      "It does not matter which one is installed first."
    ],
    "correctAnswer": "Install R first, then RStudio.",
    "explanation": "Install R first, then RStudio. The lecture first describes the installation of R (03:13.720 - 04:20.120) and then moves on to RStudio, noting 'Now we  actually use R Studio over R.' implying R needs to be present for RStudio to interface with it."
  },
  {
    "question": "[1] What was the latest R version mentioned in the lecture at the time of recording?",
    "options": [
      "R 4.0.0",
      "R 3.6.1",
      "R 2.15.0",
      "R 3.0.0"
    ],
    "correctAnswer": "R 3.6.1",
    "explanation": "R 3.6.1 The lecturer states, 'currently the latest version is R3.6.1.' (03:51.040 - 04:01.771)."
  },
  {
    "question": "[1] What should a user with a 32-bit system do if the latest RStudio version is primarily focused on \n64-bit systems?",
    "options": [
      "Download and install Python instead.",
      "Install an older, compatible version of RStudio from a specific link for older versions.",
      "Upgrade their system to 64-bit immediately.",
      "Use the base R UI directly, as RStudio will not function on 32-bit."
    ],
    "correctAnswer": "Install an older, compatible version of RStudio from a specific link for older versions.",
    "explanation": "Install an older, compatible version of RStudio from a specific link for older versions. The lecturer advises, 'Now problem with RStudio, little bit of problem with RStudio is that newer versions are more  focused towards 64 bit system. Now by chance if you have a 32 bit system, you have to go to this link. And then... the  older versions are there.' (05:40.120 - 06:16.139)."
  },
  {
    "question": "[1] Which version of RStudio is recommended for general use, as mentioned in the lecture?",
    "options": [
      "RStudio Server Pro",
      "RStudio Desktop (free version)",
      "RStudio Connect",
      "RStudio Team"
    ],
    "correctAnswer": "RStudio Desktop (free version)",
    "explanation": "RStudio Desktop (free version) The lecturer states, 'there are various versions of RStudio available and we will use this RStudio desktop which is the  free version.' (05:06.700 - 05:18.060)."
  },
  {
    "question": "[1] What is the primary function of the top-left pane in RStudio, often referred to as the 'editor' by \nthe instructor?",
    "options": [
      "To display output from executed code.",
      "To show plots and graphical representations.",
      "To write and save R scripts/code.",
      "To view the current variables and data in the environment."
    ],
    "correctAnswer": "To write and save R scripts/code.",
    "explanation": "To write and save R scripts/code. The instructor explains, 'The second quandrant which is 'practice.r' where there is written is an editor. This is where you  write your code. This is where you save your code...' (10:31.810 - 10:38.800)."
  },
  {
    "question": "[1] What is the purpose of the console pane in RStudio?",
    "options": [
      "To manage project files and directories.",
      "To store saved variables and datasets.",
      "Where your R code runs and results are displayed.",
      "To install and manage R packages."
    ],
    "correctAnswer": "Where your R code runs and results are displayed.",
    "explanation": "Where your R code runs and results are displayed. The lecturer states, 'Console is a place where your code runs. So when you run the code, all your results come in the  console.' (10:48.390 - 11:00.139)."
  },
  {
    "question": "[1] Which RStudio pane displays all the data sets, variables, and matrices that you save and want \nto use later?",
    "options": [
      "The editor pane",
      "The console pane",
      "The environment pane",
      "The files pane"
    ],
    "correctAnswer": "The environment pane",
    "explanation": "The environment pane The instructor explains, 'Environment is where, whatever data set, variable, matrix that you want to save, so that you  can use it later can be stored.' (11:20.360 - 11:27.780)."
  },
  {
    "question": "[1] How can you open a new R script file in RStudio?",
    "options": [
      "By clicking 'File' -> 'Open Project' -> 'R Script'.",
      "By clicking 'Tools' -> 'New File' -> 'R Script'.",
      "By clicking 'File' -> 'New File' -> 'R Script'.",
      "By using the shortcut Ctrl + P."
    ],
    "correctAnswer": "By clicking 'File' -> 'Open Project' -> 'R Script'.",
    "explanation": "By clicking 'File' -> 'New File' -> 'R Script'. The lecturer demonstrates, 'I will you to the file at the corner, left corner you will see file and then new file and R script.  File, New File, R Script, you can also click on Ctrl Shift N.' (08:14.419 - 08:26.319)."
  },
  {
    "question": "[1] What is the keyboard shortcut mentioned for opening a new R script in RStudio?",
    "options": [
      "Ctrl + S",
      "Ctrl + L",
      "Ctrl + Shift + N",
      "Ctrl + R"
    ],
    "correctAnswer": "Ctrl + S",
    "explanation": "Ctrl + Shift + N The lecturer mentions, 'You can also click on Ctrl Shift N. So that will open something like this.' (08:22.719 - 08:26.319)."
  },
  {
    "question": "[1] Why is it considered a good practice to save your R script immediately after opening a new file?",
    "options": [
      "RStudio requires files to be saved before any code can be written.",
      "To prevent data/code loss in case of a crash or program disturbance.",
      "Saving improves the execution speed of the R script.",
      "Saved files automatically get version control."
    ],
    "correctAnswer": "To prevent data/code loss in case of a crash or program disturbance.",
    "explanation": "To prevent data/code loss in case of a crash or program disturbance. The instructor emphasizes, 'It is a good practice that you save it. You save it, so that later point of time if you write  something, you just press Ctrl S and it get saved. So otherwise, by chance your computer hangs or by chance;  sometimes it is a programming language, so if you run a program, sometimes it can go for a, it can get probably  disturbed. So that you do not lose your data, you do not lose your code, it is a good practice to start saving from the  very first.' (08:32.219 - 09:10.410)."
  },
  {
    "question": "[1] What does a hash sign (`#`) denote at the beginning of a line in an R script?",
    "options": [
      "An executable command that produces an output.",
      "A variable assignment.",
      "A comment that will be ignored by the R interpreter.",
      "A function definition."
    ],
    "correctAnswer": "A comment that will be ignored by the R interpreter.",
    "explanation": "A comment that will be ignored by the R interpreter. The lecturer explains, 'Anything that starts with a hash sign is a comment. So comment means it will run but it will not  give any result.' (17:15.909 - 17:23.890)."
  },
  {
    "question": "[1] Which of the following is considered the most basic object in R programming, as per the \nlecture?",
    "options": [
      "A matrix",
      "A data frame",
      "A vector or a variable",
      "A list"
    ],
    "correctAnswer": "A vector or a variable",
    "explanation": "A vector or a variable The instructor states, 'So the basic object, the most basic object of R is called a vector or a variable.' (16:34.300 -  16:40.910)."
  },
  {
    "question": "[1] How does the lecturer analogize a vector in R to a concept in Excel?",
    "options": [
      "A single cell in Excel.",
      "A complete worksheet in Excel.",
      "One column of an Excel spreadsheet.",
      "One row of an Excel spreadsheet."
    ],
    "correctAnswer": "One column of an Excel spreadsheet.",
    "explanation": "One column of an Excel spreadsheet. The lecturer says, 'You can imagine, vector or variable is in Excel, it is one column of an Excel or one row of an Excel.  So it is better to imagine one column of an Excel...' (16:40.910 - 16:48.070)."
  },
  {
    "question": "[1] If you run the line `a = 0` in the RStudio editor, where would you observe the value `0` being \nsaved?",
    "options": [
      "In the console pane as an output.",
      "In the files pane as a new file.",
      "In the global environment pane, under the variable `a`.",
      "It wouldn't be saved anywhere until explicitly told to."
    ],
    "correctAnswer": "In the global environment pane, under the variable `a`.",
    "explanation": "In the global environment pane, under the variable `a`. The lecturer demonstrates, 'the moment I run that a is equals to 0, you will see that in the global environment, 0 gets  saved in the value of a...' (18:38.020 - 18:45.870)."
  },
  {
    "question": "[1] How can you display the value of a variable named `a` in the RStudio console after it has been \nassigned?",
    "options": [
      "Type `print(a)` in the editor and run it.",
      "Type `output(a)` in the console and press Enter.",
      "Type `a` in the console and press Enter.",
      "Click on the variable `a` in the environment pane."
    ],
    "correctAnswer": "Type `a` in the console and press Enter.",
    "explanation": "Type `a` in the console and press Enter. The lecturer explains, 'If I write in my console, just a and then press an enter. I have written a and press an enter, it  gives me 0.' (19:00.270 - 19:07.770)."
  },
  {
    "question": "[1] What is the function of `Ctrl + L` in RStudio?",
    "options": [
      "To load an existing R script.",
      "To save the current R script.",
      "To clear the RStudio console.",
      "To open the help documentation."
    ],
    "correctAnswer": "To clear the RStudio console.",
    "explanation": "To clear the RStudio console. The lecturer explicitly states, 'I will press control L. So I just press that control and L keeping control and L. So control L  cleans the console at any point of time.' (15:32.730 - 15:38.920)."
  },
  {
    "question": "[1] Given `a = 0` and `b = 5`, what would be the output in the console if you type `a + b` and press \nEnter?",
    "options": [
      "0",
      "5",
      "Error",
      "a+b"
    ],
    "correctAnswer": "0",
    "explanation": "5 The lecturer demonstrates this, showing `a + b` results in `5` (20:32.809 - 20:41.100)."
  },
  {
    "question": "[1] What is the difference between `a = 1:10` and `b = c(2, 5, 6, 8, 9)` in terms of the data type R \nassigns, as explained in the lecture?",
    "options": [
      "`a` is a character vector, `b` is a logical vector.",
      "`a` is a numeric vector, `b` is an integer vector.",
      "`a` is an integer vector, `b` is a numeric vector.",
      "Both are integer vectors, with no practical difference."
    ],
    "correctAnswer": "`a` is an integer vector, `b` is a numeric vector.",
    "explanation": "`a` is an integer vector, `b` is a numeric vector. The lecturer explains, 'The difference between the first one and second one is these are integer and this is a numeric.  The first one is integer because the moment I write a 1 colon 10, it knows I am asking from 1 to 10 only the integer  values. So that is why it is putting 'int' there. But when I am writing b is equal c 2, 5, 6, 8, 9, that R does not know... That  is why it is playing safe, it is putting numeric there.' (24:17.520 - 24:56.820)."
  },
  {
    "question": "[1] What does the `c()` function in R primarily do?",
    "options": [
      "It calculates the correlation between two vectors.",
      "It clears the console output.",
      "It converts inputs into a vector combination.",
      "It counts the number of elements in a list."
    ],
    "correctAnswer": "It converts inputs into a vector combination.",
    "explanation": "It converts inputs into a vector combination. The lecturer explains `c()`'s job is 'to give you a vector combination of whatever inputs you give.' (23:38.020 - 24:01.440)."
  },
  {
    "question": "[1] Which function would you use to determine the number of elements in a vector in R?",
    "options": [
      "count()",
      "size()",
      "length()",
      "dimension()"
    ],
    "correctAnswer": "length()",
    "explanation": "length() The lecturer introduces `length()` as the function to 'find out how long a particular vector is.' (25:31.890 - 25:36.230)."
  },
  {
    "question": "[1] If vector `a` is defined as `a = 1:10`, what would `length(a)` return?",
    "options": [
      "1",
      "10",
      "0",
      "Error"
    ],
    "correctAnswer": "1",
    "explanation": "10 `1:10` creates a vector containing integers from 1 to 10, inclusively, which are 10 elements. So, `length(a)` would be 10  (25:44.200 - 25:52.070)."
  },
  {
    "question": "[1] What is the purpose of the `class()` function in R?",
    "options": [
      "To assign a name to a variable.",
      "To create a new object class.",
      "To determine the type or class of an R object.",
      "To clean the RStudio environment."
    ],
    "correctAnswer": "To determine the type or class of an R object.",
    "explanation": "To determine the type or class of an R object. The lecturer states, 'Class is another function which gives you what class it is, means what type of object it  is.' (26:45.610 - 26:56.600)."
  },
  {
    "question": "[1] When does a first bracket `()` generally signify a function in R?",
    "options": [
      "When it is used immediately after an object's name.",
      "When it is used after a recognizable function name (e.g., `xyz()`).",
      "When it contains numerical values inside.",
      "Only when it is used in the console directly."
    ],
    "correctAnswer": "When it is used after a recognizable function name (e.g., `xyz()`).",
    "explanation": "When it is used after a recognizable function name (e.g., `xyz()`). The lecturer explains, 'something is written, some xyz is written... And then a first bracket. The moment I write this you  will see something like this, where something is written and a first bracket, a first bracket generally signifies a  function.' (22:40.660 - 22:58.370)."
  },
  {
    "question": "[1] What does a third bracket `[]` typically indicate in R?",
    "options": [
      "A mathematical operation.",
      "A conditional statement (e.g., if-else).",
      "A location, address, or specific element within an object.",
      "A function parameter list."
    ],
    "correctAnswer": "A location, address, or specific element within an object.",
    "explanation": "A location, address, or specific element within an object. The lecturer distinguishes, 'xyz and then a third bracket, it talks about a location, a address, a cell; mostly an  address...' (23:11.830 - 23:28.060)."
  },
  {
    "question": "[1] How can you access the help documentation for a specific function, for example, the `seq` \nfunction?",
    "options": [
      "By typing `?seq` in the console.",
      "By typing `help(seq)` in the console or editor and running it.",
      "By searching 'seq' in the 'Packages' tab.",
      "Both A and B are correct methods."
    ],
    "correctAnswer": "By typing `help(seq)` in the console or editor and running it.",
    "explanation": "By typing `help(seq)` in the console or editor and running it. The lecturer demonstrates, 'if you know that function's name is seq... I can ask the help like this help within bracket seq  to know that what are the various aspects.' (27:35.210 - 27:56.720). While `?seq` is also valid, the lecture only explicitly  demonstrates `help(seq)`."
  },
  {
    "question": "[1] What are the three main parameters described for the `seq` (sequence) function in the help \ndocumentation?",
    "options": [
      "start, end, increment",
      "from, to, by",
      "initial, final, step",
      "begin, finish, jump"
    ],
    "correctAnswer": "from, to, by",
    "explanation": "from, to, by The lecturer reads from the help documentation, 'in the usage, you will see that here it is written help from is equal to  this, to is equal to this, by is equal to something.' (28:15.860 - 28:20.320)."
  },
  {
    "question": "[1] What would be the output of `seq(1, 9, by = 2)`?",
    "options": [
      "1, 2, 3, 4, 5, 6, 7, 8, 9",
      "1, 3, 5, 7, 9",
      "1, 2, 4, 6, 8",
      "Error: 'by' argument is missing."
    ],
    "correctAnswer": "1, 3, 5, 7, 9",
    "explanation": "1, 3, 5, 7, 9 The lecturer demonstrates this exact example, stating, 'It is giving 1,3,5,7,9. That mean it starts at 1, ends at 9 each  jump is 2.' (28:47.230 - 28:55.910)."
  },
  {
    "question": "[1] Why does the instructor recommend typing code manually rather than just copying it?",
    "options": [
      "Typing is faster than copying in RStudio.",
      "RStudio often has issues with pasted code.",
      "Typing allows you to make mistakes and learn from them, which is crucial for coding.",
      "Manual typing helps with memorizing R functions and syntax."
    ],
    "correctAnswer": "Typing allows you to make mistakes and learn from them, which is crucial for coding.",
    "explanation": "Typing allows you to make mistakes and learn from them, which is crucial for coding. The lecturer advises, 'it is very good practice that you type on your own because when you type on your own, you do  the mistakes. And when you do the mistake, you learn from those mistakes. It is very important to do mistakes as until  and unless you do mistakes in coding, you will not learn how to code.' (12:28.200 - 12:41.780)."
  },
  {
    "question": "[1] What is considered a good practice for managing multiple open files in RStudio?",
    "options": [
      "Keep all files open for quick access.",
      "Close all files except the one currently being actively used.",
      "Save all files frequently to prevent data loss.",
      "Organize files into different RStudio projects."
    ],
    "correctAnswer": "Close all files except the one currently being actively used.",
    "explanation": "Close all files except the one currently being actively used. The lecturer emphasizes, 'it is a good practice to keep only that file open which you are using and close all other  files.' (13:50.840 - 13:55.220)."
  },
  {
    "question": "[1] Which pane in RStudio would you typically find tabs for 'Files', 'Plots', 'Packages', and 'Help'?",
    "options": [
      "The top-left pane (Editor)",
      "The bottom-left pane (Console)",
      "The top-right pane (Environment)",
      "The bottom-right pane (Fourth Quadrant)"
    ],
    "correctAnswer": "The bottom-right pane (Fourth Quadrant)",
    "explanation": "The bottom-right pane (Fourth Quadrant) The lecturer refers to the 'fourth quadrant' as containing 'lots of tabs like files is one tab, and then plots is another tab,  packages is another tab, and at the right time I will discuss about all these tabs.' (11:51.950 - 12:04.310)."
  },
  {
    "question": "[1] What happens when a line with a comment (`#`) is executed in RStudio?",
    "options": [
      "It produces an error message.",
      "It displays the comment text in the console.",
      "It runs but produces no output or changes in the environment.",
      "It pauses the script execution for user input."
    ],
    "correctAnswer": "It runs but produces no output or changes in the environment.",
    "explanation": "It runs but produces no output or changes in the environment. The lecturer explains that a comment 'will run but it will not give any result. So how to run it? ... I click run, it came down  in the console 'Start with a vector'. It got run but it is a comment. It will give no output. Nothing changed.' (17:18.150 -  17:46.310)."
  },
  {
    "question": "[1] How can you run a single line of code from the editor without selecting the entire line?",
    "options": [
      "By pressing Ctrl + Enter anywhere on the line.",
      "By placing the cursor anywhere on that line and clicking the 'Run' button.",
      "By double-clicking the line.",
      "This is not possible; the entire line must be selected."
    ],
    "correctAnswer": "By placing the cursor anywhere on that line and clicking the 'Run' button.",
    "explanation": "By placing the cursor anywhere on that line and clicking the 'Run' button. The lecturer states, 'if I just put my cursor and then press run also. If I just put my cursor and press run, it will run one  single line of code.' (18:17.840 - 18:26.319)."
  },
  {
    "question": "[1] In the RStudio environment, if a variable `a` is defined as `a = 1:10`, what will be its `class`?",
    "options": [
      "numeric",
      "character",
      "integer",
      "logical"
    ],
    "correctAnswer": "integer",
    "explanation": "integer The lecturer explains that `1:10` specifically creates 'only the integer values. So that is why it is putting 'int'  there.' (24:29.410 - 24:31.640). This is confirmed by `Class of a is an integer.` (26:56.600)."
  },
  {
    "question": "[1] If `b` is defined as `b = c(2, 5, 6, 8, 9)`, what will be the `class(b)`?",
    "options": [
      "integer",
      "numeric",
      "character",
      "list"
    ],
    "correctAnswer": "numeric",
    "explanation": "numeric The lecturer explains that `c()` with whole numbers will be 'playing safe, it is putting numeric there.' (24:53.690 -  24:56.820). This is confirmed by `Class of b is a numeric` (26:56.600)."
  },
  {
    "question": "[1] What is the primary benefit of 'cleanliness' in coding, as stressed by the instructor?",
    "options": [
      "It makes the code run faster.",
      "It helps reduce confusion and improve readability.",
      "It is a requirement for using version control systems.",
      "It makes code easier to deploy in production environments."
    ],
    "correctAnswer": "It helps reduce confusion and improve readability.",
    "explanation": "It helps reduce confusion and improve readability. The lecturer states, 'first good job is to cleanliness, cleanliness is another very important thing for any coding because  then you will get less confused.' (14:48.660 - 14:56.400)."
  },
  {
    "question": "[1] When `a = 0` is executed, no output appears in the console. Why is this the case?",
    "options": [
      "The command was a comment.",
      "The command assigned a value, but didn't explicitly request to print it.",
      "The console only displays errors, not assignments.",
      "The variable `a` was not correctly defined."
    ],
    "correctAnswer": "The command assigned a value, but didn't explicitly request to print it.",
    "explanation": "The command assigned a value, but didn't explicitly request to print it. The lecturer contrasts this by saying, 'So 0 gets saved in a but nothing comes as output. In the next line, I have written  a, and pressed an enter. Now I am calling a. So whatever value is in a, gets comes out.' (19:52.800 - 20:06.490).  Assignments implicitly save values to the environment, but do not print output to the console unless explicitly requested  (e.g., by typing the variable name)."
  },
  {
    "question": "[1] In the context of learning R, what does the instructor suggest regarding memorization?",
    "options": [
      "Memorizing all functions and syntax is crucial for efficiency.",
      "It's impossible to remember all functions, so focus on understanding concepts.",
      "Memorization is important for basic functions, but not for advanced ones.",
      "Only memorize functions that are frequently used in marketing analytics."
    ],
    "correctAnswer": "It's impossible to remember all functions, so focus on understanding concepts.",
    "explanation": "It's impossible to remember all functions, so focus on understanding concepts. The lecturer advises, 'It has to be, it has, it should come from your inside that okay this kind or if it is not coming from  the inside, you should have a resource to fall back on and that should not be something which is your notes. So do not  write down.' (15:09.610 - 15:19.990) and later, 'For a single human being it is almost impossible to remember all the  functions, their syntax and its.' (29:33.350 - 29:43.751)."
  },
  {
    "question": "[1] What distinguishes the RStudio user interface (UI) from R's own UI, as perceived by the \ninstructor?",
    "options": [
      "R's UI is faster for complex computations.",
      "RStudio's UI offers more drag-and-drop options and is generally more user-friendly.",
      "RStudio's UI is only for debugging, while R's UI is for coding.",
      "R's UI has more advanced statistical features built-in."
    ],
    "correctAnswer": "RStudio's UI offers more drag-and-drop options and is generally more user-friendly.",
    "explanation": "RStudio's UI offers more drag-and-drop options and is generally more user-friendly. The lecturer states, 'it is my personal opinion and probably many of, many other people will actually agree with me that  RStudio\u2019s UI is more user-friendly than R\u2019s UI. There are lots of more options available, lots of more drag and drop kind  of options or click kind of options are available which makes it easier.' (04:31.069 - 04:57.069)."
  },
  {
    "question": "[1] If you want to find out the data type of the variable `c` which stores the `length(b)` (where `b = \nc(2, 5, 6, 8, 9)`), what would be the output of `class(c)`?",
    "options": [
      "numeric",
      "integer",
      "character",
      "list"
    ],
    "correctAnswer": "integer",
    "explanation": "integer The lecturer states `length(b)` would return `5` because `b` has 5 entries. 'That 5 value get saved in c.' Then later,  `Class of c is a integer again because c is also an integer.` (26:11.980 - 27:02.620)."
  },
  {
    "question": "[1] What is the purpose of running `a = 1:30 by = 2` if it were valid R code (though the syntax is \nincorrect for colon operator)?",
    "options": [
      "To create a vector with values from 1 to 30.",
      "To create a vector from 1 to 30 with steps of 2.",
      "To calculate the average of numbers between 1 and 30.",
      "To filter numbers between 1 and 30."
    ],
    "correctAnswer": "To create a vector from 1 to 30 with steps of 2.",
    "explanation": "To create a vector from 1 to 30 with steps of 2. This question refers to the concept explained with the `seq` function, which the lecturer mentions as creating a  sequence 'starts from 1, ends at 30 with a jump of 2. So 1, 3, 5, 7, 9, 11 and so on till it reach 30.' (27:12.930 -  27:29.480)."
  },
  {
    "question": "[1] When opening RStudio for the first time, what is the initial view most users are likely to see?",
    "options": [
      "A blank R script file ready for coding.",
      "An existing R project file from a previous session.",
      "A view with three boxes (console, environment, files) but no editor pane visible initially.",
      "A welcome screen with tutorials."
    ],
    "correctAnswer": "A view with three boxes (console, environment, files) but no editor pane visible initially.",
    "explanation": "A view with three boxes (console, environment, files) but no editor pane visible initially. The lecturer explains, 'for my case there was already one file was open. But most of you, if you are doing for the first  time, this is something that you will see. This is a view or probably something similar to this view is what you will  see.' (07:11.650 - 07:27.439) referring to a screenshot of the three panes without the script editor open yet. The next  step is to open a new file (07:59.110 - 08:09.449)."
  },
  {
    "question": "[1] Which of the following describes the nature of R programming, as highlighted in the lecture?",
    "options": [
      "It is a commercial, closed-source software.",
      "It is an open-source, freely downloadable software.",
      "It is an online-only platform that requires constant internet connection.",
      "It is primarily a drag-and-drop tool for data analysis."
    ],
    "correctAnswer": "It is an open-source, freely downloadable software.",
    "explanation": "It is an open-source, freely downloadable software. The lecturer states, 'R I told that it is online. It is the open source, available online, freely downloadable.' (02:35.250 -  02:40.690)."
  },
  {
    "question": "[1] What would be the result of `a * b` if `a` is 0 and `b` is 5?",
    "options": [
      "5",
      "0",
      "Error",
      "-5"
    ],
    "correctAnswer": "5",
    "explanation": "0 The lecturer demonstrates, 'a multiplication of B, will give me 0 and so on.' (20:49.240 - 20:56.030)."
  },
  {
    "question": "[1] When installing R, what is generally recommended regarding the version if a newer one is \navailable than what is shown in the video?",
    "options": [
      "Always install the exact version shown in the video.",
      "Download the newest available version.",
      "Install an older, more stable version.",
      "Consult the instructor before installing any version."
    ],
    "correctAnswer": "Download the newest available version.",
    "explanation": "Download the newest available version. The lecturer advises, 'When we actually see this video, probably more recent version of R might be available. If it is  available, download that.' (04:01.771 - 04:08.660)."
  },
  {
    "question": "[1] The instructor mentions that the `practice.r` file was created and saved. What is the file \nextension for R scripts?",
    "options": [
      ".txt",
      ".r",
      ".rmd",
      ".Rproj"
    ],
    "correctAnswer": ".r",
    "explanation": ".r The lecturer says, 'I have probably write probably something like \u201cpractice.r\u201d. Now once I write that and save that, this  particular file gets saved.' (09:30.400 - 09:38.760)."
  }
];
