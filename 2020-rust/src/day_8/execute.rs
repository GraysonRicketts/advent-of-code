use std::collections::HashSet;
use std::convert::TryFrom;
// acc increases or decreases a single global value called the accumulator by the value given in the argument. For example, acc +7 would increase the accumulator by 7. The accumulator starts at 0. After an acc instruction, the instruction immediately below it is executed next.
// jmp jumps to a new instruction relative to itself. The next instruction to execute is found using the argument as an offset from the jmp instruction; for example, jmp +2 would skip the next instruction, jmp +1 would continue to the instruction immediately below it, and jmp -20 would cause the instruction 20 lines above to be executed next.
// nop stands for No OPeration - it does nothing. The instruction immediately below it is executed next.

mod input_parser {}

#[derive(PartialEq, Debug)]
enum OperationType {
    NOP,
    ACC,
    JMP,
}

#[derive(PartialEq, Debug)]
struct Operation {
    op: OperationType,
    num: i32,
}

fn parse_input(input: String) -> Vec<Operation> {
    let mut ops = Vec::new();

    let lines: Vec<&str> = input.split("\n").collect();
    for line in lines.iter() {
        let split_line: Vec<&str> = line.trim_end().split(" ").collect();

        let op_type: OperationType = match split_line[0] {
            "nop" => OperationType::NOP,
            "acc" => OperationType::ACC,
            "jmp" => OperationType::JMP,
            _ => panic!("Operation not identified"),
        };

        let num_sign: char = split_line[1].chars().nth(0).unwrap();
        let num: i32 = split_line[1].split_at(1).1.parse().unwrap();
        let signed_num: i32 = (if num_sign == '-' { -1 } else { 1 }) * num;

        let op = Operation {
            op: op_type,
            num: signed_num,
        };

        ops.push(op);
    }

    return ops;
}

/// Gets the accumulator efore any instruction is executed a second time
fn get_infinite_accumulator(input: String) -> i32 {
    let ops = parse_input(input);
    let mut accum: i32 = 0;
    let mut pos: usize = 0;

    let mut visited_pos: HashSet<usize> = HashSet::new();

    let final_accum = loop {
        if visited_pos.contains(&pos) {
            println!("pos: {}, op: {:?}", pos, visited_pos);
            break accum;
        }
        visited_pos.insert(pos);

        let curr_op = &ops[pos];
        println!("op: {:?}", curr_op);
        match curr_op.op {
            OperationType::ACC => {
                accum += curr_op.num;
                pos += 1;
            }
            OperationType::NOP => pos += 1,
            OperationType::JMP => {
                let is_neg = curr_op.num > 0;
                let u_jmp_num = if is_neg {
                    curr_op.num - 1
                } else {
                    (curr_op.num * -1) + 1
                };

                let pos_shift = usize::try_from(u_jmp_num).unwrap();
                if is_neg {
                    pos += pos_shift;
                } else {
                    pos -= pos_shift;
                }
            }
        }

        // issue is because pos is only positive so can't move backwards
        println!("acc: {}, pos: {}, op: {:?}", accum, pos, curr_op)
    };

    return final_accum;
}

pub fn run() {
    println!("Part 1: {}", "NA");
    println!("Part 2: {}", "NA");
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn parse_input_works() {
        let input = String::from(
            "nop +0
acc +1
jmp -4",
        );

        let output = parse_input(input);
        assert_eq!(output[0].op, OperationType::NOP);
        assert_eq!(output[0].num, 0);
        assert_eq!(output[1].op, OperationType::ACC);
        assert_eq!(output[1].num, 1);
        assert_eq!(output[2].op, OperationType::JMP);
        assert_eq!(output[2].num, -4);
    }

    #[test]
    fn part_1_works() {
        let input = String::from(
            "nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6",
        );
        let output = get_infinite_accumulator(input);
        assert_eq!(output, 5);
    }
}
