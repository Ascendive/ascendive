export class User {
    // _key: String;
    displayName: String;
    email: String;
    isUserActive: Boolean;
    timeOfLastAction: Number;
    jobTitle: String;
    imageUrl: String;
    primaryWorkCity: String;
    company: String;
    dateFormatString: String;

    constructor(
        displayName: String,
        email: String,
        isUserActive: Boolean,
        timeOfLastAction: Number,
        jobTitle: String,
        imageUrl: String,
        primaryWorkCity: String,
        company: String,
        dateFormatString: String) {

        this.company = company;
        this.dateFormatString = dateFormatString;
        this.displayName = displayName;
        this.email = email;
        this.imageUrl = imageUrl;
        this.isUserActive = isUserActive;
        this.jobTitle = jobTitle;
        this.primaryWorkCity = primaryWorkCity;
        this.timeOfLastAction = timeOfLastAction;
    }

}

