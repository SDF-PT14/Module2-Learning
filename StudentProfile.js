function createStudentProfile(){
	function getStudentName(){
		return "NAncy";
	}
	function getAge(){
		return 30;
	}
	function getCountry(){
		return "Rwanda";

	}
	function getFavoriteLanguage(){
		return "Python";
	}
	function getSchoolName(){
		return "Moringa School";
	}
	return (getStudentName()+ " is " + getAge()+ " years old, comes from "+ getCountry() + " and is learning "+ getFavoriteLanguage() + " at " + getSchoolName());
}
let profile=createStudentProfile();
console.log(profile);