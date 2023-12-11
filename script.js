
//Object is a collection of Key:value pair. lets create and print it.
const student= {
    Name: "Abdullah",
    Age: 12,
    programmer: true,
};
console.log(student);
//now lets print one by one key, with 2 methodes.
console.log(student.Name);
console.log(student["Age"]);
//lets upgrade Age
student["Age"]=student["Age"]+2;
console.log(student["Age"]);

//Lets do one more practice
const profile={
    Name: "ShradaKhapra",
    posts: 195,
    isfollow:true,
    followers:569000,
    following:4,
    Profession: "Entrepreneur",
}
console.log(profile);

