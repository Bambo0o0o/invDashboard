# Build MERN financeDashboard(Using SQL instead of NoSQL)

Last building time : 03:23:55 /07:04:56

link : <https://www.youtube.com/watch?v=ddKQ8sZo_v8&list=PLs0RSZipvGCQlfdgzb1o6ijSIHJ3Axq1z>
myGitHub : <https://github.com/Bambo0o0o/financeDashboard.git>

***Support NodeJS 20.19+

<!-- Shortkey -->
0) ***Open command guide : ctrl+space***
1) In intellisence list we can automatic import tools by : ctrl + click on keyword
2) Run client : npm run dev
3) Run server :  npm run dev
4) Turn on console.log() by highlight word : ctrl + alt + l
5) Move multiple lines left (outdent) : Shift + Tab
6) Move multiple lines right (indent) : Tab
7) In intellisence list we can automatic import tools by : ctrl + click on keyword
8) Turn on console.log() by highlight word : ctrl + alt + l
9) Move multiple lines left (outdent) : Shift + Tab
10) Move multiple lines right (indent) : Tab
11) For line comment : Ctrl + /
12) For block comments : Shift + Alt + A
13) Console.log : highlight word + {ctrl + k} then {ctrl + l}
14) Development tool : ctrl+shift+l
15) intellisence highlight on that word : Ctrl + .
16) Code auto formate : Shift + Alt + F
17) Move menu to top : right click under menu bar --> select "Activity Bar Position" --> Top or Default
18) Active shortkey on each tools : ctl+shift+p

<!-- myGitHub -->
echo "# financeDashboard" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin <https://github.com/Bambo0o0o/invDashboard.git>
git push -u origin main
<!-- Existed Repository -->
git remote add origin <https://github.com/Bambo0o0o/invDashboard.git>
git branch -M main
git push -u origin main

<!-- Project's Tools : Backend-->
node: <https://nodejs.org/en/download/>
npx: <https://www.npmjs.com/package/npx>
vscode: <https://code.visualstudio.com/download>
Postgres: <<https://www.postgresql.org/download/> >
PgAdmin: <https://www.pgadmin.org/download/>
Prisma docs: <https://www.prisma.io/docs/prisma-orm/quickstart/prisma-postgres>
Prisma types: <https://www.prisma.io/docs/orm/reference/prisma-schema-reference#model-fields>
Postman: < <https://www.postman.com/downloads/> >

<!-- Project's Tools : Database(AWS)-->
AWS: < <https://aws.amazon.com/>>
AWS cli: <https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html>
AWS billing: <https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Fcostmanagement%2Fhome%3Fca-oauth-flow-id%3D158a%26hashArgs%3D%2523%26isauthcode%3Dtrue%26oauthStart%3D1775277372245%26region%3Dus-east-2%26state%3DhashArgsFromTB_us-east-1_c2cf67e320ca46e6&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcostinsights&forceMobileApp=0&code_challenge=VDgutDhmVneIMkADRaQCbFv87Y_mgbwMtQ_9V8j4Q4g&code_challenge_method=SHA-256>
AWS free tier: <https://aws.amazon.com/free/?all-free-tier>
AWS ipv4 new charge: <https://aws.amazon.com/blogs/aws/new-aws-public-ipv4-address-charge-public-ip-insights/>
AWS ipv4 free tier: <https://aws.amazon.com/about-aws/whats-new/2024/02/aws-free-tier-750-hours-free-public-ipv4-addresses/>

<!-- Project's Tools : Frontend-->
Nextjs: <https://nextjs.org/docs/app/getting-started/installation>
Redux Toolkit w/ Nextjs: <https://redux-toolkit.js.org/usage/nextjs>
Redux Toolkit Query: <https://redux-toolkit.js.org/rtk-query/overview>
Nextjs and Context Providers: <https://nextjs.org/docs/app/getting-started/server-and-client-components#using-context-providers>
Tailwind: <https://tailwindcss.com/docs/theme>
Recharts: <<https://recharts.org/en-US/api> >
MUI: < <https://mui.com/x/react-data-grid/>>

<!-- Project's Tools-->
completed code : <https://github.com/ed-roh/inventory-management/tree/master>
image files : <https://github.com/ed-roh/inventory-management/tree/master/server/assets>
tailwind.config.ts : <https://github.com/ed-roh/inventory-management/blob/master/client/tailwind.config.ts>
redux store file : <https://github.com/ed-roh/inventory-management/blob/master/client/src/app/redux.tsx>
seed files : <https://github.com/ed-roh/inventory-management/blob/master/server/prisma/seed.ts>
seed data files : <https://github.com/ed-roh/inventory-management/tree/master/server/prisma/seedData>
data model diagram : <https://drawsql.app/teams/team-3023/diagrams/56-inventorymanagement>
prisma schema file : <https://github.com/ed-roh/inventory-management/blob/master/server/prisma/schema.prisma>
aws commands : <https://github.com/ed-roh/inventory-management/blob/master/server/aws-ec2-instructions.md>

<!-- Process Time -->
0:00 intro
3:37 basic installations
3:52 nextjs and packages installations
19:53 navbar and sidebar
50:24 redux installations
1:29:18 data modeling
1:36:18 local database installations
1:58:16 backend and packages installations
2:07:50 dashboard page
3:57:23 products page
4:05:44 inventory page
4:53:55 users page
5:00:36 settings page
5:12:42 expenses page
5:43:29 aws intro
5:48:00 aws billing
5:53:57 aws networking
6:09:54 aws ec2
6:29:34 aws rds
6:44:44 aws amplify
6:52:46 aws s3
7:03:54 outro

## ShortKey

1) In intellisence list we can automatic import tools by : ctrl + click on keyword
2) Turn on console.log() by highlight word : ctrl + alt + l
3) Move multiple lines left (outdent) : Shift + Tab
4) Move multiple lines right (indent) : Tab
5) For line comment : Ctrl + /
6) For block comments : Shift + Alt + A
7) Console.log : highlight word + {ctrl + k} then {ctrl + l}
8) Development tool : ctrl+shift+l
9) intellisence highlight on that word : Ctrl + .
10) Code auto formate : Shift + Alt + F
11) Move menu to top : right click under menu bar --> select "Activity Bar Position" --> Top or Default

## Setup GitHub repository

1) Go to GitHub create new repository
2) Add name as : invtDashboard
3) Left other default click : Create repository
4) Go to root directory of project that need to upload to GitHub

### Command GitHub

<!-- New Repository -->
echo "# invtDashboard" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin <https://github.com/Bambo0o0o/invtDashboard.git>
git push -u origin main
<!-- Existed Repository -->
git remote add origin <https://github.com/Bambo0o0o/invtDashboard.git>
git branch -M main
git push -u origin main

## Setup NextJS Tools for : Frontend

1) Setup NodeJs V20.15.1 and NextJs V14.2.4 ***Must same version as EdROH***
2) Setup NPX (exexute npm package binaries) : npm install -g npx
3) Execute npm package : npx create-next-app@latest
   1) Project name : inventory-management
   2) Used default Next.js : n with customize settings
   3) Use typescript : y
   4) Use Eslint : y
   5) Use Tailwind css : y
   6) Create src directory : y
   7) Use App Router : y
   8) Others as : n
   9) Customize default "import alias" (@/*) : n
4) Change project directory name from "inventory-management" to : client
5) Go to client folder : cd client
6) Install Development tools :
   1) ES7 + React/Redux/React-Native Snippets
   2) Prettier - Code Formatter
   3) Prettier ESLint
   4) Tailwind CSS IntelliSense
   5) Go to chrome browser install add-ins tool : Redux DevTools, Pesticide for Chrome
7) In client folder install "packages" : npm i @mui/x-data-grid @mui/material @emotion/react @emotion/styled lucide-react numeral recharts uuid axios
8) In stall "dependency packages" : npm i -D @types/node @types/uuid @types/numeral
9) Go to {page.tsx} file in src/app folder :
   1) Delete code inside "main" tag
   2) To check setup tools working fined write : "Hello Client" in main tag
    ***Error : You are using Node.js 18.20.8. For Next.js, Node.js version ">=20.9.0" is required.***
    ***Solve by : NodeJs version 20.15.1 which same as EdRoh used***

    ***Error : tailwindcss not match**
    ***Solve by : using "package.json" by EdRoh***
   3) Run : num run dev
   4) Run app to checking work fine <http://localhost:3000>: ctrl+click

## Setup frontend(Client) files : 10:40-->Require NextJS 14.2.4

### Setup theme and colors

1) Open {globals.css} file Delete all code then add :
   1) Keep @tailwind tag then delete others code left
   2) Styling in {global.css} file as : before, after, html, body, root, .app{}
   3) Install dependency package : npm i -D tw-colors
2) Setup {tailwind.config.ts} file
   1) Import packages as : tailwindcss, tw-colors, tailwindcss/colors
   2) Setup colors as : baseColors, shadeMapping
   3) Create funstions as : generateThemeObject
   4) Create calling theme from generateThemeObject as : darkTheme and lightTheme
   5) Create extra colors dark/light as : themes
   6) Configurate theme for each pages and elements as : config

### Setup Dashboard page

1) Go to {page.tsx} file in src/app foolder
   1) Create "Dashboard" tag
   2) Import Dashbooard from app/dashboard/page
2) Create dashboard folder in src/app folder
   1) Create {page.tsx} file in dashboard folder
      1) In {page.tsx} using VsCode extension as : tsrafce
      2) Change page tag to be : Dashboard
   ***At timestamp 22:33 work fine***

### Setup Layout components to be reusable on every page

1) Go to {layout.tsx} in src /app folder this is where we create "navBar" and "sideBar"
2) Add "DashboardWrapper" tag wrap "children" tag
3) Import DashboardWrapper from /DashboardWrapper
4) Create {DashboardWrapper.tsx} in app folder
   1) In {dashboardWrapper.tsx} file using code template as : tsrafce
   2) Change "Props" parameter to : children:{children: React.ReactNode}
   3) Passing "children" to DashboardWrapper in "div" tag
   4) Delete "type Props" parameter

### Setup Page layout(Sidebar, Navbar and Dashboard)

1) In {dashboardWrapper.tsx} file add "className" tag
2) Adding flex and styling in "className" tag
3) Adding Sidebar text instead of DashboardWrapper text in "div" tag
4) Adding "main" tag then move "children' tag in there
5) Adding "className" tag in "main" tag and styling
6) Adding "light" theme in outside "className" tag
7) Adding "NavBar" tag above "children" tag
8) Import Navbar from @/app/(components)/Navbar
9) Create (components) folder in app folder
10) Create Navbar folder in (components) folder
11) Create {index.tsx} in Navbar folder

### Setup navBar(Top bar of Page : Burger icon, Search, Theme, Notification, Profile and Setting)

#### Setup Navbar layout

1) In {index.tsx} file use template code : tsrafce
   1) Delete type Props parameters
2) Adding "className" tag to styling for layouting navbar in "div" tag
   <!-- Left side element -->
3) Create navbar elements on "left side" :
   1) Create "className" tag to styling "Left side" element in "div" tag
   2) Create "Burger button" element and Styling
      1) Create "className" tag to styling burger button
      2) Create callBack function as : onClick={() => {}}
      3) Adding "use client" on top of "index.tsx" file to provide activities of "onClick" function
   3) Import Menu icon from  lucide-react
   4) Install package as : npm i lucide-react@0.407.0
   ***Error : On NextJs cannot use pass any OnClick function to any server***
   ***Solve by : Adding "use client"; tag at the top of {index.tsx} file***
   5) Create "Search bar" element and Styling
      1) Create "className" tag as : relative
      2) Create "input" tag then setup "type"as : search
      3) Place text in search bar with "placeholder" as : Start type to search groups & products
      4) Create "className" tag to styling "Bell" element in search bar
   <!-- Right side element -->
4) Create "className" tag to styling for "Right side" element in "div" tag : "flex justify-between items-center gap-5"
5) Create "className" tag to layouting for "Right side" element in "div" tag : "hidden md:flex justify-between items-center gap-5"
6) Create "Light/Dark" mode with "moon/sun" icon from lucide-react click button as
   1) Create "div" tag then adding "button" onClick function to toggleDarkMode as : isDarkMode ? (</sun className...>):(</moon className...>), Presently add only "sun" mode
   2) Create "Sun/Moon" mode button as : <https://lucide.dev/icons/moon>
7) Create "Notification" with "bell" icon from lucide-react
   1) Create "className" tag then adding relative
   2) Create "Bell" icon and "className" tag to styling
   3) Create "className" tag to add number of Notify by manually and Styling
8) Create "className" tag for vertical line and space in "hr" tag
9) Create "className" tag for profile image(Just text now)
10) Create "className" tag for profile Name
11) Create "className" tag for setting icon from lucide-react and import Link from next/link

### Setup sideBar ()

1) Create sidebar folder in (components) folder
2) Create {index.tsx} in sidebar folder
3) Used short-key to create template : TSRAFCE
4) Rename "index" to be : Sidebar
5) Remove "Props" and its declaired
6) Go to {dashboardWrapper.tsx} file then adding "Sidebar" tag in "div" tag above "main" tag as : <_Sidebar/>
7) In {dashboardWrapper.tsx} file import Sidebar from /components/Sidebar

#### Setup sideBar : Top Logo and Name

1) In {index.tsx} in sidebar folder Add "div" tag instead of "Sidebar" text
2) Create "className" tag to create Top Header layout as : "flex gap-3 justify-between md:justify-normal items-center pt-8"
3) Insert "div" tag for adding logo in second "div" tag
4) Insert "h1" tag for "Page-Name" under "div" tag's logo
5) Create "className" tag to styling "Page-Name" as : "font-extrabold text-2xl"
6) Adding "Page-Name" as : invStock
7) Adding "button" tag in second "div" tag
8) Create "className" tag in "button" tag As : "md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
9) Adding "onClick" function in "button" tag as : onClick={()=>{}}
10) Adding "Menu" tag in "button" tag
11) Create "className" tag to styling as : "w-4 h-4"
12) Adding "use client" on top of "index.tsx" file to provide activities of "onClick" function

#### Setup sideBar : Sidebar List name(Link to each pages)

1) Create "div" tag for "List name" to be create link
2) Create "className" tag in "div" tag to styling and layout as : "flex-grow mt-8"
3) Adding simple "Link here" text in "div" tag

#### Setup sideBar : Sidebar footer

1) Create "div" tag for declared Copy right page
2) Create "p" tag (paragraph tag) as : &copy; 2026 invStock
3) Create "className" tag in "p" tag to styling and layout as : "text-center text-xs text-gray-500"
   ***Before make a link for "onClick" we need to setup redux toolkit first then useState to manipulate each actions as : Sidebar collaspe, Dark/Light mode and Setting***
4) Install react-redux : npm i react-redux @reduxjs/toolkit dotenv redux-persist
5) Create {.env.local} file in client folder to provide URL that run on our local machine
   1) Setup URL as : NEXT_PUBLIC_API_BASE_URL=<http://localhost:8000>
6) Create {redux.tsx} file in app folder
   1) Copy code from EdRoh file to our {redux.tsx} file (52:15)
   ***This {redux.tsx} file is setup for NextJS and Used to store data from different session on local***
   ***What we will used {redux.tsx} file on our web page :***
   <!--  1) REDUX PERSISTENCE, It's used to setup local storage
         2) All of this setup file come from "Redux-Toolkit.JS document
      -->

7) Create "state" folder in "src" folder
8) Create {index.ts} file in "state" folder
   1) Import createSlice and PayloadAction from reduxjs/toolkit
   2) Export InitialStateTypes as : isSidebarCollapsed and isDarkMode
   3) Create variable as initialState as InitialStateTypes and setup : isSidebarCollapsed and isDarkMode as false
   4) Export globalSlice as : name, initialState, reducers as isSidebarCollapsed and isDarkMode
   5) Export variable setIsSidebarCollasped and setIsDarkMode as : globalSlice.actions
   6) Export default globalSlice.reducer
9) Create {api.ts} file in "state" folder
   1) Import createApi and fetchBaseQuery from /reduxjs/toolkit/query/react
   2) Setup "tsrafce" then change function name to Dashboard

#### Setup sideBar : Connect redux store with app

1) Go to {dashboardWrapper.tsx} create connection to NEXT.js
2) Create "DashboardLayout" component above "DashboardWrapper" component
   1) Create function "isSidebarCollapsed"
   2) Create function "isDarkMode"
   3) Create result function "useEffect" to swap : dark/light mode
   4) Create return value of both function : isSidebarCollapsed, isDarkMode
   5) Import useEffect from react
   ***This function used to control html on {layout.tsx} file for dark/light mode***
   6) Import useAppSelector from ./redux
3) Commplete setup "DashboardWrapper" component
   1) In return function delete all tag before
   2) Adding "StoreProvider" tag
   3) Adding "DashboardLayout" tag between StoreProvider then add children in there
4) Adding "use client" on top of {dashboardWrapper.tsx} file
   ***Let's Clarify "Context Provider" state on Next.js V14.2.4 page : <https://nextjs.org/docs/14/app/building-your-application/rendering/composition-patterns#using-context-providers>***

#### Setup sideBar : Create sideBar elements

1) Go to {index.tsx} file in Sidebar folder(Above return function)
   1) Create dispatch params to calling function as : useAppDispatch()
   2) Create isSidebarCollasped fucntion same as {dashboardWrapper.tsx} : useAppSelector()
   3) Create toggleSidebar function to extend/collaspe
   4) Create sidebarClassNames params to calling isSidebarCollasped function with collaspe properties
2) Adding "div" tag for sidebarClassNames above Top Logo
   1) Setup onClick function to toggle on/off collaspe sidebar in "button" tag

#### Setup navBar : to handling toggle sidebar extend/collapse

1) Go to {index.tsx} file in navBar folder (Adding above return function)
   1) Create dispatch params to calling function as : useAppDispatch()
   2) Create isSidebarCollasped fucntion same as {dashboardWrapper.tsx} : useAppSelector()
   3) Create toggleSidebar function to extend/collaspe
2) In Left side navBar setup button by adding "toggleSidebar" to onClick function
3) Modify top logo as "isSidebarCollapsed" with : px-5 or px-8
4) Hidden page name "invStock" as "isSidebarCollapsed" when it collaspe on h1 tag with : hidden or block

#### Setup sideBar : with Link menu

1) Setup "SideBarLink" function above "sideBar" function
   1) Setup alternative function to "SidebarLinkProps"
   2) Setup "pathname" params
   3) Setup "isActive" params
   4) Setup return function as : isCollapsed, isActive
   5) Setup Icon and Label
2) Create "SidebarLinkProps" above "sideBarLink" function
3) Setup link for each menus
   1) Setup "Dashboard" link with : href, icon , label, isCollapsed
   2) Setup "Inventory" link with : href, icon , label, isCollapsed
   3) Setup "Products" link with : href, icon , label, isCollapsed
   4) Setup "Users" link with : href, icon , label, isCollapsed
   5) Setup "Settings" link with : href, icon , label, isCollapsed
   6) Setup "Expenses" link with : href, icon , label, isCollapsed
4) Import Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User from lucide-react
5) Import image from next/image
6) Import link from next/link
7) Setup image above "logo" page : <https://s3-inventorymanagement.s3.us-east-2.amazonaws.com/logo.png>
    ***NextJs strick for image share have to follow code pattern as rule otherwise it will get error***
    ***Next/Image : <https://nextjs.org/docs/messages/next-image-unconfigured-host>***
    ***Also can solve by adding image and domains tags in : next.config.js***
8) Config {next.config.js} to render logo page
9) Setup sideBar footer when extend/collaspe "isSidebarCollapsed" as : hidden/block
<!-- Complete Sidebar setup -->

#### Setup navBar : for Dark/Light mode

1) Go to {index.tsx} in Navbar folder
   1) Create "isDarkMode" function to handling state
   2) Create "toggleDarkMode" to handling dark/light mode
   3) In Right side navBar setup button by adding "toggleDarkMode" to onClick function
   4) Setup switch icon from light/dark as : moon and sun icon

## Setup backend(Server) : to render data from database

### Setup local database : Postgres

1) Check data flow with drawSQL : <https://drawsql.app/teams/team-3023/diagrams/56-inventorymanagement>
   ***For many data flow in application eventhough less flow it still should be clearly process with schemas on to show and manipulate data route on database, which much more clearly and easily to handle***
2) Setup local database with "PostgreSQL"-V17.9 before deploy to clound amazon : <https://www.enterprisedb.com/downloads/postgres-postgresql-downloads>
3) Setup "pgAdmin4" to visualize our data connection on database(It's included in postgresSQL installer)
4) Create server on "pgAdmin4"
   1) Right click on server menu on sidebar then click create
   2) Create register-server : on general tab
      1) Name : invdashboard
      2) Other option : keep default
   3) Create connection : on connection tab
      1) Host name/address : localhost
      2) Port : 5432
      3) Maintenance database : postgres
      4) Username : postgres
      5) password : private
      6) Click save database setup
5) When close application and open again need to re-connect by : right click then click "connect server"
6) Create database on postgres
   1) Right click on "Database" on sidebar
   2) Database : invdashboard
   3) Other option : Keep default

### Setup backend tools(Version following to EdROH)

#### Setup backend on root project

1) Create backend tools root project directory
   1) Create server folder : mkdir server
   2) Go to server folder : cd server
   3) Setup initial tools {package.json} with NPM : npm init -y
   4) Install package tools for SQL database : npm i prisma@latest @prisma/client@latest
   5) Initial prisma tools : npx prisma init
   6) Go to prisma folder : cd prisma
2) Copy assets folder(prepared by EdROH) to server folder
3) Copy seedData folder(prepared by EdROH) to prisma folder
4) Copy {seed.ts} file(prepared by EdROH) to prisma folder
5) Back to server folder : cd server
6) Check typescript version : npx tsc -v
7) Install "typescript"(if need) : npm install typescript --save-dev
8) Initialize "typescript" package : npx tsc --init
9) Install "typescript" tools : npm i -D ts-node typescript @types/node
10) Modify {tsconfig.json} file as "Modules" tag
11) Assign "module" as : "nodenext"
    ***When get lint error using ==> "module" as : "esnext"***
12) Assign "moduleResolution" as : "nodenext"
    ***When get lint error using ==> "moduleResolution": "bundler"***
13) Assign "resolveJsonModule" as : true,
14) Assign "outDir" as : "./dist"
    ***When get lint error using above "outDir" tag ==> "rootDir": "."***

   ***Cann't complete install when follow up with EdROH. So I have to used package.json and tsconfig.json files instead back to step1 to create server folder***
15) The purpose of {seed.ts} file is used to fetch data to SQL Database
    1) Solved lint error on "fs" and "path" directory by adding tag withing ""compilerOptions": {} : "types": ["node"]
16) Adding model schemas from EdRoh to {schema.prisma} file as : Users, Products, Sales, Purchases, Expenses, SalesSummary, PurchaseSummary, ExpenseSummary, ExpenseByCategory
17) Adding "seed" tag in "script" tag to {package.json} file as ==> "seed" : "ts-node prisma/seed.ts"

#### Setup backend : Connect to local database PostgresSQL

1) Go to {.env} file setup local database : <DATABASE_URL="postgresql://postgres:927sAph25@*@localhost:5432/postgres?schema=public">
2) generate database for prisma : npx prisma generate
3) merge database for prisma : npx prisma migrate dev --name init
4) Running database as : npm run seed
   ***Complete solve error : setup prisma***
   ***Modified : tsconfig,json, package.json, seed.ts, schema.prisma and change database name in postgres from invdashboard to postgres. Still got lint error on url but fine to connect postgres software now***
5) Go to PostgresSQL open database as "postgres"
   1) Open schemas
   2) Open tables if it complete will see : Users, Products, Sales, Purchases, Expenses, SalesSummary, PurchaseSummary, ExpenseSummary, ExpenseByCategory and _prisma_migrations

#### Setup backend : Install tools to manipulate backend

1) Install tools as : npm i express body-parser cors dotenv helmet morgan concurrently
2) Instal dependency tools as : npm i -D nodemon @types/cors @types/express @types/morgan
3) Create "src" folder in server folder
4) Create {index.ts} file in "src" folder
   1) Import tools for server : express, dotenv, bodyParser, cors, helmet, morgan
   2) Import routs for dashboard : dashboardRoutes, productRoutes, userRoutes, expenseRoutes
   3) Configurated each tools as : app.use()
   4) Configurated each routes as : app.use()
   5) Create checkport function as : app.listen()

#### Setup backend : To setup server running with Typescript

1) Install more tools(To build typescript file) as : npm i rimraf
   1) In {package.json} file adding "build" tag in "scripts{}" tag under "seed" as : "build": "rimraf dist && npx tsc"
   2) Then adding "start" tag after "build" tag as : "start":"npm run build && node dist/index.js"
   3) Then adding "dev" tag after "start" tag as : "dev":"npm run build && concurrently \"npx tsc -w\" \"nodemon --exec ts-node src/index.ts\""
2) Go to {.env} file then set port as : PORT=8000
3) Check working fine as : npm run dev
4) Testing routes as : app.get("/hello", (req, res) =>{})
5) Testing by open another terminal as : curl <http://localhost:8000/hello>

#### Setup backend : postman tool(Used instead of hard code testing with => app.get("/hello", (req, res) =>{}))

1) Go to "postman" website download and install : <https://www.postman.com/downloads/>
2) Sign in "postman" with "GitHub" account : windowslive main
3) Using "postman" select GET request with url as : <http://localhost:8000/hello>

### Setup Backend : API as Dashboard for Expenses, Products, Sales, Puchases

#### Setup Backend : Controllers and Routes

1) Create "controllers" folder in src folder
2) Create {dashboardController.ts} file in there
   1) Import "request" and "response" from express
   2) Import "PrismaClient" from prisma/client
   3) Create "getDashboardMetrics" function with request-response
   4) Create "Promise" as : popularProducts, salesSummary, purchaseSummary, expenseSummary, expenseByCategorySummaryRaw, expenseByCategorySummary
   5) Each of Promise using "findMany" function with : 15 quantities and orderBy "desc" or descending
   6) Create "catch error" when data missing retrieving
3) Create "routes" folder in src folder
4) Create {dashboardRoutes.ts} file in there
   1) Import "Router" from express
   2) Import "getDashboardMetrics" from controllers/dashboardController
   3) Create "router" as Router function
   4) Create root(/) router as : getDashboardMetrics
   5) export router
5) Go to {index.ts} in src folder
   1) Import dashboardRoutes from routes/dashboardRoutes
   2) Calling data with app.use("/dashboard", dashboardRoutes) by local as : <http://localhost:8000/dashboard>
   3) Testing Home route as : curl <http://localhost:8000/dashboard>
   4) Result will get set of datas as : {"popularProducts":[{"productId":"000a8c23-5bca-436c-a216-4e747a94c511","name":"Yew Plum Pine","price":196.27,"rating":1.6,"stockQuantity":967173},{"productId":"25d01c80-bca1-4a00-b1d0-0fbd39ff9e89","name":"Simpson's Rosinweed","price":184.41,"rating":1.98,"stockQuantity":953695},...]}
   5) Terminal result will be : 127.0.0.1 - - [30/Apr/2026:14:16:57 +0000] "GET /dashboard HTTP/1.1" 200 5074

### Setup Frontend : Dashboard render data from local server PostgresSQL

1) Go to {api.ts} file in client/src/state folder
2) Make API call data from server to render on frontend
   1) Addin "tagTypes" as : tagTypes: ["DashboardMetrics"]
   2) In endpoint function adding "getDashboardMetrics" function and query to dashbaord page as : "/dashboard"
   3) Adding "DashboardMetrics" contain with{from dashboardController.ts} file : popularProducts, salesSummary, purchaseSummary, expenseSummary, expenseByCategorySummary
   4) Adding export interface above "DashboardMetrics" as : Product, NewProduct, SalesSummary, PurchaseSummary, ExpenseSummary, ExpenseByCategorySummary
   5) Adding export interface below "DashboardMetrics" as : User

#### Setup frontend : Setup layout page 3 columns and n rows on each column

1) Go to {page.tsx} file in dashboard folder
   1) Adding "use client" on top of page
   2) Setup "className" for grid laout as : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows"
2) Go to {globals.css} file adding media breakpoint as : @media (min-width: 768px) {} and @media (min-width: 1280px){}
3) Back to  {page.tsx} file in dashboard folder
   1) Setup column with "div className" tag as : "row-span-3 xl:row-span-6 bg-gray-500"
   2) Setup column with "div className" tag as : "row-span-3 xl:row-span-6 bg-gray-500"
   3) Setup column with "div className" tag as : "row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500"
   4) Setup column with "div className" tag as : "row-span-3 bg-gray-500"
   5) Setup column with "div className" tag as : "md:row-span-1 xl:row-span-2 bg-gray-500"
   6) Setup column with "div className" tag as : "md:row-span-1 xl:row-span-2 bg-gray-500"
   7) Setup column with "div className" tag as : "md:row-span-1 xl:row-span-2 bg-gray-500"

#### Setup frontend : CardPopularProducts

1) Create {CardPropularProducts.tsx} file in dashboard folder
   1) Create template as : tsrafce
   2) Remove type props
   3) Name function as : CardPropularProducts
   4) Import useGetDashboardMetricsQuery from state/api
   5) Create "data" parameter for as : useGetDashboardMetricsQuery
   6) Copy "className" from {page.tsx} file to {CardPropularProducts.tsx} file to return function as : "row-span-3 xl:row-span-6 bg-gray-500"
   7) Adding ternay function for "Loading..." and "Propular Products" page and setup className as : isLoading?():()
2) Rendering "CardPropularProducts" to {page.tsx} file instead of "first" className as : <CardPopularProducts/>
   1) Import CardPopularProducts from /CardPopularProducts
3) Back to {CardPropularProducts.tsx} file in dashboard folder
   1) Change background layout "bg-gray-500" to : bg-white shadow-md rounded-2xl pb-16
   2) Create "horizontal" line below "h3" tag as : <hr />
   3) Create "div" with "className" as : "overflow-auto h-full"
   4) Create function as : dashboardMetrics?.popularProducts.map((product) => ())
   5) Create "div" tag in "popularProducts" function  with "key" and "className" as : product.ProcutId, "flex items-center justify-between gap-3 px-5 py-7 border-b"
   6) Create Left column for : Image, Product.name, Product.price, Product.rating
      1) Create simple "image" as : <div>image</div>
      2) Create div with "className" for product.name and product.price as : "flex flex-col justify-between gap-1"
      3) Create div with "className" for product.name as : "font-bold text-gray-700"
      4) Create div with "className" for product.price as : "flex text-sm items-center"
      5) Create span with "className" for product.price as : "font-bold text-blue-500 text-xs"
      6) Create span with "className" for "horizontal line" as : "mx-2"
      7) Create simple "product.rating" as : <div>Rating</div>
      8) Wrap up left column for "image, product.name, product.price, product.rating" with "div" tag as : "flex items-center gap-3"
   7) Create right column for Stock data as
      1) Wrap up "prooduct stock" with div and "className" as : "text-xs flex items-center"
      2) Create "button" tag with "className" as : "p-2 rounded-full bg-blue-100 text-blue-600 mr-2"
      3) Adding "ShoppingBag" icon in "button" tag with "className" as : "w-4 h-4"
      4) Adding "math" funciton for "product.stockQuantity" below "button" tag as : {Math.round(product.stockQuantity / 1000)}k Sold
   8) Create "rating" icon as Star
      1) Adding "Rating" folder in (components) folder
      2) Create {index.tsx} in Rating folder
      3) Create template as : tsrafce
      4) Changing index name to : Rating
      5) Chnaging type Props as : RatingProps
      6) Create "rating" data type as : Number
      7) Create return value as array of number which is instance of star icon as : 1, 2, 3, 4, 5 with "index" parameter
      8) Maping array number with "Star" icon form : lucide-react
      9) Setup "key" as : "index" parameter
      10) Setup color of "Star" from "rating" parameter as : "#FFC107" : "#E4E5E9"
      11) Create "className" : "w-4 h-4"
4) Back to {CardPropularProducts.tsx} file in dashboard folder
   1) Create "Rating" link from /(components)/Rating
   2) Change simple "rating" tag to : <Rating/>
   3) Import Rating from /(components)/Rating
   4) Adding "rating" value as : product.rating || 0

### Setup frontend : CardSalesSummary

1) Create {CardSalesSummary.tsx} file in src/app/(components)/dashboard folder
2) Rendering "CardSalesSummary" to {page.tsx} file instead of "first" className as : <CardSalesSummary/>
3) Import "useGetDashboardMetricsQuery" from /state/api
4) Import "TrendingUp" from lucide-react
5) Import "React, useState" from react
6) Import "Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis" from recharts
7) Create "CardSalesSummary" function as : const CardSalesSummary = () => {}
8) Create parameters for "CardSalesSummary" function as 
   1) Create "data, isLoading, isError" as : useGetDashboardMetricsQuery()
   2) Create "salesData" as : data?.salesSummary || []
   3) Create "timeframe, setTimeframe" as : useState("weekly")
   4) Create "totalValueSum" as : salesData.reduce() || 0
   5) Create "averageChangePercentage" as : salesData.reduce()
   6) Create "highestValueData" as : salesData.reduce()
   7) Create "highestValueDate" as : highestValueData.date
   8) Create "isError" function return as : Failed to fetch data
9) In return() function add "div" with "className" as row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between"
10) Create "isLoading" function retrun : "Loading..." and "CardSalesSummary" rendering
11) Create Rendering "CardSalesSummary"
12) Export default as : CardSalesSummary

#### Setup frontend : CardSalesSummary with Header

1) Create "div" tag wrap up header
2) Create "h2" with "className" as : "text-lg font-semibold mb-2 px-7 pt-5"
3) Create "Sales Summary" text

#### Setup frontend : CardSalesSummary with Body Section

1) Create "div" tag wrap up Body
2) Create "div" with "className" to render data as : "flex justify-between items-center mb-6 px-7 mt-5"
3) Create "div" with "className" to render "paragraph, saleValue, and trendGraph"
   1) Create "paragraph" with "className" as : "text-xs text-gray-400"
   2) Rendering text in "paragraph" as : Value
   3) Create "span" with "className" to show "Value" as : "text-2xl font-extrabold"
   4) Render "Value" as : ${(totalValueSum / 1000000).toLocaleString("en", {maximumFractionDigits: 2,})} m
   5) Create "span" with "className" to show "trendGraph" as : "text-green-500 text-sm ml-2"
   6) Create "TrendingUp" with "className" as : "inline w-4 h-4 mr-1"
   7) Render "trendGraph" as : {averageChangePercentage.toFixed(2)}%
4) Create "select" with "className" as : "shadow-sm border border-gray-300 bg-white p-2 rounded"
5) Assign "value" as : {timeframe}
6) Create "onChange" function as : setTimeframe(e.target.value)
7) Create "option value" for : daily, weekly, monthly

#### Setup frontend : CardSalesSummary with CHART

1) Create "ResponsiveContainer" with "className" and size width="100%" height={350} as : "px-7"
2) Create "BarChart" as
   1) Create "data" equal to : {salesData}
   2) Create "margin" as : top: 0, right: 0, left: -25, bottom: 0
3) Create "CartesianGrid strokeDasharray" as : ""
   1) Setup "vertical" as : false
4) Create "XAxis" with
   1) Setup "dataKey" as : date
   2) Setup "tickFormatter" function to retrun : `${date.getMonth() + 1}/${date.getDate()}`
5) Create "YAxis" with
   1) Setup "tickFormatter" function to retrun : `$${(value / 1000000).toFixed(0)}m`
   2) Setup "tick" as : fontSize: 12, dx: -1
   3) Setup "tickLine, axisLine" as : false
6) Create "Tooltip" with
   1) Setup "formatter" as : `$${value.toLocaleString("en")}`
   2) Setup "labelFormatter" function as : date and return date.toLocaleDateString()
7) Create "Bar" with
   1) Setup "dataKey" as : totalValue
   2) Setup "fill" as : #3182ce
   3) Setup "barSize" as : 10
   4) Setup "radius" as : 10, 10, 0, 0

#### Setup frontend : CardSalesSummary with FOOTER

1) Create "div" tag to wrap up "FOOTER"
2) Create "horizontal" line as : <hr />
3) Create "div" with "className" as : "flex justify-between items-center mt-6 text-sm px-7 mb-4"
4) Create "paragraph1" as : {salesData.length || 0} days
5) Create "paragraph2" with "className" as : "text-sm"
   1) Setup "Highest Sales Date" text as : " "
   2) Create "span" with "className" as : "font-bold"
   3) Setup "span" value as : {highestValueDate}

### Setup frontend : CardPurchaseSummary

1) Create {CardPurchaseSummary.tsx} file in src/app/(components)/dashboard folder
   1) Rendering "CardPurchaseSummary" to {page.tsx} file instead of "first" className as : <CardPurchaseSummary/>
   2) Create template as : tsrafce
   3) Remove "type Props" and "Props" in function
   4) Copy "className" from third line to "div" in return function as : "row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500"
   5) Copy "data, isLoading, isError" from {CardSalesSummary.tsx} to {CardPurchaseSummary.tsx} above return function and replace parameters as : const { data:dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
   6) Import useGetDashboardMetricsQuery from /state/api
   ***Notice : We declaired "useGetDashboardMetricsQuery()" many files location(duplicated calling). This is the benefit function as "Redux-Toolkit" help us to manipulate it even each files used different parameters ===> This help us to more agiltis to data flow***
2) Setup "purchaseData" from "purchaseSummary" as : data?.purchaseSummary || [];
3) Changing background to "white" and adding "flex", "shadow-md", "rounded" as : "flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl"
4) Copy isLoading function from "CardSalesSummary" replace "CardPurchaseSummary"  word as : {isLoading?<div className="m-5">Loading...</div>:<></>}

#### Setup frontend : CardPurchaseSummary with "Header"

1) Copy "header" from "CardSalesSummary" with "h2" and "className" place between <>..</> as : "text-lg font-semibold mb-2 px-7 pt-5"
2) Change Name from "Sales Summary" to : "Purchase Summary"

#### Setup frontend : CardPurchaseSummary with "Body"

1) Create "div" tag to cover "Body" section
2) Create "div" tag with "className" for "Body Header" as : "mb-4 mt-7 px-7"
3) Create "p" tag with "className" for "Purchased" text as : "text-xs text-gray-400"
4) Create "div" tag with "className" for align center as : "flex items-center"
5) Create "p" tag with "className" for "lastDataPoint" as : "text-2xl font-bold"
6) Create "lastDataPoint" function point to "totalPurchased" as : {lastDataPoint? numeral(lastDataPoint.totalPurchased).format():}
7) Import numeral from numeral
8) Install "numeral version 2.0.6" as : npm i numeral@2.0.6 types/numeral@2.0.5
9) Create "lastDataPoint" parameter above return() function as : purchaseData[purchaseData.length - 1] || null
10) *Create "lastDataPoint.changePercentage" logic function to seperate trend as : TrendingUp and TrendingDown*
11) Create absolute fuction for percentage which cann't less than zero as : {Math.abs(lastDataPoint.changePercentage!)}%

#### Setup frontend : CardPurchaseSummary with "Chart"

1) Import tools from "recharts" as : Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis
2) Create "ResponsiveContainer" tag with properties as : width="100%" height={200}
3) Setup "ResponsiveContainer" tag with "className" as : "p-2"
4) Create "AreaChart" tag with :
   1) Setup "data" as : purchaseData
   2) Setup "margin" as : top: 0, right: 0, left: -50, bottom: 45
5) Setup "Xaxis" as : dataKey="date" tick={false} axisLine={false}
6) Setup "YAxis" as : tickLine={false} tick={false} axisLine={false}
7) Setup "Tooltip" with formater function as : formatter={(value: number) => []}
8) Setup "Tooltip" with labelFormatter function to "formatting date" as : {(label) => {}}
9) Setup "Area" with :
   1) type="linear"
   2) dataKey="totalPurchased"
   3) stroke="#8884d8"
   4) fill="#8884d8"
   5) dot={true}
10) Export default as : CardPurchaseSummary

### Setup frontend : CardExpenseSummary

1) Create {CardExpenseSummary.tsx} file in src/app/(components)/dashboard folder
2) Rendering "CardExpenseSummary" to {page.tsx} file instead of "first" className as : <CardExpenseSummary/>
3) Back to {CardExpenseSummary.tsx} file create template as : tsrafce
4) Change "type Props" to : type ExpenseSums
   1) setup array of category as string to : number
5) Remove argument "props: Props" from "CardExpenseSummary" function
6) Setup instance array colors above "CardExpenseSummary" function as : "#00C49F", "#0088FE", "#FFBB28"
7) Import "ExpenseByCategorySummary, useGetDashboardMetricsQuery" from /state/api
8) Import "TrendingUp" from lucide-react
9) Import "Cell, Pie, PieChart, ResponsiveContainer" from recharts
10) Declare parameters
    1) Assinged "data: dashboardMetrics, isLoading" as : useGetDashboardMetricsQuery()
    2) Assigned "expenseSummary" as : dashboardMetrics?.expenseSummary[0]
    3) Assigned "expenseByCategorySummary" as : dashboardMetrics?.expenseByCategorySummary || []
    4) Assigned "expenseSums" as : expenseByCategorySummary.reduce() and return acc
    5) Assigned "expenseCategories" as : Object.entries(expenseSums).map()
    6) Assigned "totalExpenses" as : expenseCategories.reduce()
    7) Assigned "formattedTotalExpenses" as : totalExpenses.toFixed(2)
11) Setup return function
    1) Create "div" with "className" as : "row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between"
    2) Create "isLoading" function to check data was fetched as : {isLoading ? ():()}
    3) Create "CardExpenseSummary" box
12) Create Export default as : CardExpenseSummary

#### Setup frontend : CardExpenseSummary with Header

1) Create "div" tag to wrap up Header element
2) Create "h2" with "className" as : "text-lg font-semibold mb-2 px-7 pt-5"
3) Setup text Header as : Expense Summary

#### Setup frontend : CardExpenseSummary with Body wrap up chart

1) Create "div" with "className" as : "xl:flex justify-between pr-7"
2) Create "div" with "className" to wrap up chart area as : "relative basis-3/5"
3) Create "ResponsiveContainer" tag with size as : width="100%" height={140}
4) Create "PieChart" tag
   1) Create "Pie" tag with 
   2) Setup data as : {expenseCategories}
   3) Setup innerRadius as : {50}
   4) Setup outerRadius as : {60}
   5) Setup fill as : "#8884d8"
   6) Setup dataKey as : "value"
   7) Setup nameKey as : "name"
   8) Setup cx as : "50%"
   9) Setup cy as : "50%"
5) Create "expenseCategories" function as : {expenseCategories.map((entry, index) => ())}
6) Create "div" with "className" to show formattedTotalExpenses value as : "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center basis-2/5"
   1) Create "span" with "className" as : "font-bold text-xl"
   2) Rendering "formattedTotalExpenses" value as : ${formattedTotalExpenses}

#### Setup frontend : CardExpenseSummary with Label

1) Create "ul" with "className" tag as : "flex flex-col justify-around items-center xl:items-start py-5 gap-3"
2) Create "expenseCategories" function as : {expenseCategories.map((entry, index) => ())}
3) Create "li" with "key" as : `legend-${index}`
4) Create "li" with "className" as : "flex items-center text-xs"
5) Create "span" with "className" as : "mr-2 w-3 h-3 rounded-full"
6) Setup parameter "style" as : backgroundColor: colors[index % colors.length]
7) Setup "entry name" as : {entry.name}

#### Setup frontend : CardExpenseSummary with Footer

1) Create "div" to wrap up footer
2) Create horizontal line
3) Checking "expenseSummary" value
   1) Create "div" with "className" as : "mt-3 flex justify-between items-center px-7 mb-4"
   2) Create "div" with "className" as : "pt-2"
   3) Create "p" with "className" as : "text-sm"
   4) Setup "Average" value as : " "
   5) Create "span" with "className" as : "font-semibold"
   6) Setup "expenseSummary" as : ${expenseSummary.totalExpenses.toFixed(2)}
4) Create "span" with "className" as : "flex items-center mt-2"
5) Setup "TrendingUp" with "className" as : "mr-2 text-green-500"
6) Setup "TrendingUp" value as : 30%

### Setup frontend : StatCard files

1) Go to {StatCard.tsx} file 
2) Import LucideIcon from lucide-react
3) Import React from react
4) Create "StatDetail" data set
   1) Set "title" as : string
   2) Set "amount" as : string
   3) Set "changePercentage" as : number
   4) Set "IconComponent" as : LucideIcon
5) Create "StatCardProps" data set
   1) Set "title" as : string
   2) Set "primaryIcon" as : JSX.Element
   3) Set "details" as : StatDetail[]
   4) Set "dateRange" as : string
6) Create "StatCard" function
   1) Declairing parameter as : title, primaryIcon, details, dataRange
   2) Calling "StatCardProps" function
      1) Create "formatPercentage" function check "value" >=0 then return : `${signal}${value.toFixed()}%`
      2) Create "getChangeColor" function check "value" >=0 then color "value" as : "text-green-500" : "text-red-500"
7) Create "return" fucntion with
   1) Create "div" with "className" to wrap up "Header" and "Body" as : "md:row-span-1 xl:row-span-2 bg-white col-span-1 shadow-md rounded-2xl flex flex-col justify-between"
8) Create "Header" and "Body"
9) Export default as : StatCard

#### Setup frontend : StatCard files with Header

1) Create "div" wrap up Header
   1) Create "div" with "className" wrap up Header page as : "flex justify-between items-center mb-2 px-5 pt-4"
   2) Create "h2" with "className" for "tilte" as : "font-semibold text-lg text-gray-700"
   3) Setup text as : title
   4) Create "span" with "className" for "dataRange" as : "text-xs text-gray-400"

#### Setup frontend : StatCard files with Body

1) Create "div" with "className" to wrap up Body page as : "flex mb-6 items-center justify-around gap-4 px-5"
2) Create "div" with "className" for Body icon as : "rounded-full p-5 bg-blue-50 border-sky-300 border-[1px]"
3) Create icon tag as : {primaryIcon}
4) Create "div" with "className" to wrap up Body details as : "flex-1"
5) Create mapping "Body detail" as : {details.map((detail, index) => ())}
   1) Setup React.Fragment as : key={index}
   2) Create "div" with "className" to wrap up "Detail elements" as : "flex items-center justify-between my-4"
   3) Create "span" with "className" for "detail.title" as : "text-gray-500"
   4) Create "span: with "className" for "detail.amount" as : "font-bold text-gray-800"
   5) Create "div" with "className" for "detail.IconComponent" as : "flex items-center"
      1) Setup "detail.IconComponent" as : `w-4 h-4 mr-1 ${getChangeColor(detail.changePercentage)}`
      2) Create "span" for "formatPercentage(detail.changePercentage)" as : `font-medium ${getChangeColor(detail.changePercentage)}`
   6) Create "index" to checking "details.length" as : {index < details.length - 1 && <hr />}

### Setup frontend : StatCard 

#### Setup frontend : StatCard with "Customer & Expenses"
