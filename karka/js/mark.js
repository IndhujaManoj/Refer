let mark={
    tamil    :182,
    english  :174,
    maths    :172,
    chemistry:165,
    physics  :170,
    biology  :142
};

if (mark.physics>=160 && mark.chemistry>=160 && mark.maths >=160 && mark.biology>=160){
    console.log("YOU ARE ELIGIBLE FOR DENTAL COLLEGE");
}
else if((mark.tamil>=150||mark.english>=150)&&(mark.maths>=150 && mark.chemistry>=150 && mark.physics>=150)){
    console.log("you are eligible for enginering");

}
else if((mark.chemistry>=140|| mark.physics>=140)&&(mark.biology>=140 && mark.maths>=140)){
    console.log("YOU ARE ELIGIBLE FOR Bsc COMPUTER SCIENCE");

}
else{
    console.log("YOU ARE NOT ELIGIBLE FOR ANY COURCES");
}