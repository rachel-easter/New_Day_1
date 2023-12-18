// Object type
const userDetails: { name: string; age: number; hobbies: string[] } = {
    name: 'Rachel',
    age: 21,
    hobbies: ['violin', 'volleyball'],
  };
  
  console.log(typeof userDetails);

  const UserName = userDetails.name;
  console.log(UserName);
  
  // Array type - same type
  // Syntax: let arr: string[]
  const stringArray: string[] = ['burger', 'pizza', 'starbucks'];
  console.log(stringArray instanceof Array);
  
  // Array type - different types
  // Syntax: let arr: (string | number)[]
  const mixedArray: (string | number)[] = ['rush', 7, 'queen', 90];
  console.log(mixedArray instanceof Array);
  
  // Tuple - fixed collection of elements
  // Syntax: let arr: [number, string]
  const tupleArray: [string, number] = ['Happy', 100];
  console.log(tupleArray);
  
  // Enum type - used for defining constant elements
  enum Direction {
    Left,
    Up,
    Down,
    Right
  }
  
  let direction: Direction;
  console.log(Direction.Up);
  
  // Any type - used when the type of the variable is not yet decided
  let anything: any;
  console.log(typeof anything);
  
  // Void type - used in functions that don't return anything
  function displayDetails(): void {
    console.log('Currently working on it');
  }
  
  displayDetails();
  
  