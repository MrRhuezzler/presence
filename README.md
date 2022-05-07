# Presence

Presence, is a mobile application built using Flutter that can be used for taking attendance easily and quickly in a classroom. Our application tracks the attendance of the students much quicker than other methods by allowing multiple students to show their ‘presence’ simultaneously with the help of an OTP model. Our application is relatively free of cost compared to other expensive hardware solutions. The features of Presence discourage proxying and promote a fair attendance system. The teachers are also given complete access to edit the attendance status at any point of time, making Presence a very flexible application.

### Problems
- The usual method of manually entering attendance is error prone and slow at times
- We need a way for recording the attendance quickly and cheaply
- Hardware methods are expensive. A fingerprint or face recognition device will take too much time to record the attendance of every single student in the classroom
- Proxying should be avoided as much as possible
- The solution needs to be reliable.

### Solutions
- Presence allows the students to automatically notify their presence by correctly entering the OTP
- Our application can complete the attendance procedure in 30-40 seconds
- Our application is free of cost and has features that also support corner cases when the students do not have a mobile device in working condition
- The features integrated in Presence try to restrict the students from sharing the OTP, and even if the OTP is leaked somehow the headcount option will act as a failsafe.
- Our application is completely reliable as it does have any advanced requirements. We have also implemented failsafes for unforeseen circumstances.

### Database Design
![DB Designs](/images/db.png)

### Ideas for the Future
- After each number is entered for the OTP, the number pad will be randomized making it more difficult to enter the OTP. We believe this can reduce the probability of someone using two phones simultaneously for proxying.(Entering one OTP will take long enough that a student will not have time for entering two OTPs)
- Allow the students to apply for leave/OD(on duty) through the application
- Provide warnings to students with low attendance
- Provide data visualization of the attendance to the faculty for better understanding of the attendance trends

### Presentation Link
https://docs.google.com/presentation/d/1YMLFLWQAY50yhAHleE92bdTSfuB_uhfIyL9NzZ92fRw/edit?usp=sharing
