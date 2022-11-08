function write(string){
    process.stdout.write(string);
}
import chalk from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('Hello chalk'));


for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){        
        let color = (i*j).toString()    
        write(chalk.ansi256(color)(color.padEnd(4,' '))); 
    }
    write('\n');
}

write(boxen(chalk.blue.bgGreen('Hello chalk'), {
    padding: 1,
    margin:1
}));