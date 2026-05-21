class User {
  private readonly email: string;
  private readonly password: string;
  private readonly role: string;
  private readonly firstName: string;
  private readonly lastName?: string | undefined; // ? its added in case the lastName wasnt added

  constructor(
    email: string,
    password: string,
    role: string,
    firstName: string,
    lastName?: string,
  ) {
    this.email = email;
    this.password = password;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getEmail(): string {
    return this.email;
  }
  getPassword(): string {
    return this.password;
  }
  getRole(): string {
    return this.role;
  }

  fullName(): string {
    return this.lastName
      ? `${this.firstName} ${this.lastName}`
      : this.firstName;
  }
}

const admin = new User(
  "admin@example.com",
  "adminPass1",
  "ADMIN",
  "Alice",
  "Coldman",
);

const member = new User(
  "member@example.com",
  "memberPass2",
  "MEMBER",
  "Bob",
);

const owner = new User(
    "owner@owner.com",
    "OwnerPass3",
    "OWNER",
    "Benjamin",
    "Skalad",
)

function loginUser(user: User): void {
  console.log(
    `Logging in\n email: ${user.getEmail()}\nrole: ${user.getRole()}\nname: ${user.fullName()}`,
  );

  const success = !!user.getEmail() && !!user.getPassword();

  console.log(`Login ${success ? "PASSED" : "FAILED"}\n`);
}

loginUser(admin);
loginUser(member);
loginUser(owner);
