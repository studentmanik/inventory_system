function zero_left_padding(num) {
    //var num=[num1];
    var pad = "0000";
    var padded_num = pad.substring(0, pad.length - num.length) + num;
    return padded_num;
}

var validate_pass = {
    password: "",
    return_msg: "",
    min_length: "",
    alphanumeric: "",
    special_chars: "",
    pass_cap: "",
    return_result: function(pass, pass_min_length, alphanumeric, special_chars, contains_capital_letter) {
        this.password = pass;
        this.min_length = pass_min_length;
        this.alphanumeric = alphanumeric;
        this.special_chars = special_chars;
        this.pass_cap = contains_capital_letter;
        //var return_msg = 'Correct';
        if (pass.length < this.min_length) {
            this.return_msg = 'Password too short. Min length: '+this.min_length;
        }
        else {
            if (/[A-Z]/.test(pass) == false && this.pass_cap == 1) {
                this.return_msg = 'Must contain Upper and Lower case';
            }
            else if (pass.match(/([a-z])/) == null && this.alphanumeric == 1) {
                this.return_msg = 'Must contain Lower case/Character';
            }
            else if (pass.match(/([0-9])/) == null && this.alphanumeric == 1) {
                this.return_msg = 'Must contain Numbers';
            }
            else if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/) == null && this.special_chars == 1) {
                this.return_msg = 'Must contain Special Characters';
            }
            else {
                this.return_msg = 'Correct';
            }
        }
        return this.return_msg;
    }
}
		