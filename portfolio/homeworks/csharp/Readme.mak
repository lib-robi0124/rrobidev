TaxiManager9000 - Taxi Management System
Overview
TaxiManager9000 is a C# console application designed to manage taxi services, including user authentication, driver management, and taxi assignments. This application is part of a C# Advanced workshop project. **TaxiManager9000** is a learning project built with .NET 7 using object-oriented programming principles.
Features
•	User Authentication:
o	Three user roles: Administrator, Manager, and Maintainance
o	Role-based access control
•	Driver Management:
o	List all drivers
o	Assign/unassign drivers
o	Driver status tracking (available/unavailable)
•	Taxi Assignment:
o	Assign taxis to drivers
o	View current assignments
•	Vehicle Management:
o	List all vehicles
o	View vehicle status and assignments
taxiApp/
├── TaxiManager9000.app.csproj
├── Models/
│ ├── Driver.cs
│ ├── Car.cs
│ └── License.cs
├── Services/
│ ├── DriverService.cs
│ ├── CarService.cs
│ └── ShiftService.cs
├── Database/
│ └── FakeDatabase.cs
├── UI/
│ └── Menu.cs
└── Program.cs git clone https://github.com/lib-robi0124/csharpadv.git
Project Structure
The main project file is TaxiManager9000.app.csproj. The application follows standard C# project structure with:
•	Program.cs - Main entry point
•	Models/ - Contains data models
•	Services/ - Contains business logic
•	Utilities/ - Helper classes and extensions
## 🧑‍💻 Technologies Used
- C# (.NET 7)
- Console App
- Object-Oriented Design
- Layered Architecture (Models, Services, UI)
🧠 Learning Goals
•	Practice SOLID principles.
•	Learn clean architecture separation (UI / Services / Data).
•	Manage state without a database using collections.

