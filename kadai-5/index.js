const profile = {
    firstName: "Riki",
    famillyName: "Hibiki",
    age: 21,
    major: "Japanese literature",
    hobby: "Shoppinng",
    job: "Universily student",
    families: "mather and father",
};

const keys = Object.keys(profile);

//　普通のループを使う
for (let i = 0; i < keys.length; i = i + 1){
    const key = keys[i];
    const value = profile[key];
    const text = "私の" + key + "は、" + value + "です。";
    console.log(text);
}

// of キーワードでより簡単にループをかく
for (let key of keys){
    const value = profile[key];
    const text = "私の" + key + "は、" + value + "です。";
    console.log(text);
}