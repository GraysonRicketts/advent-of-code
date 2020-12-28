use std::io;

mod day_8;

use day_8::execute;

fn main() {
    println!("Which day would you like to run?");
    let mut guess = String::new();
    io::stdin()
        .read_line(&mut guess)
        .expect("failed to read line");

    execute::run();
}
