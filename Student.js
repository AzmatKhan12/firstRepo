class Student {
    constructor(firstName, lastName, sex,age) {
        this.firstName = firstname;
        this.lastName = lastName;
        this.sex = sex;
        this.age = age;
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return '${this.firstName} ${this.lastName}';
    }
    eligiblity(minAge) {
        if (Student.age > minAge) {
            console.log(this.name + 'is eligible');
        }
        else {
            console.log(this.name + 'note eligible');
        }
    }
}
// Instantiate object;

const s1 = new Student('john', 'Doe', 'male', 17);
const s2 = new Student('Mary', 'smith', 'female', 22);

s1.eligiblity(18);
s2.eligiblity(18);
console.log(p1);
