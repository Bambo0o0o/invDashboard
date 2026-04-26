# Build MERN financeDashboard(Using SQL instead of NoSQL)

Last building time : 01:41:05 /07:04:56

link : <https://www.youtube.com/watch?v=ddKQ8sZo_v8&list=PLs0RSZipvGCQlfdgzb1o6ijSIHJ3Axq1z>
myGitHub : <https://github.com/Bambo0o0o/financeDashboard.git>

***Support NodeJS 20.19+

<!-- Shortkey -->
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

<!-- myGitHub -->
echo "# financeDashboard" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Bambo0o0o/invDashboard.git
git push -u origin main
<!-- Existed Repository -->
git remote add origin https://github.com/Bambo0o0o/invDashboard.git
git branch -M main
git push -u origin main

<!-- Project's Tools : Backend-->
node: <https://nodejs.org/en/download/>
npx: <https://www.npmjs.com/package/npx>
vscode: <https://code.visualstudio.com/download>
Postgres: <https://www.postgresql.org/download/ >
PgAdmin: <https://www.pgadmin.org/download/>
Prisma docs: <https://www.prisma.io/docs/prisma-orm/quickstart/prisma-postgres>
Prisma types: <https://www.prisma.io/docs/orm/reference/prisma-schema-reference#model-fields>
Postman: < https://www.postman.com/downloads/ >

<!-- Project's Tools : Database(AWS)-->
AWS: < https://aws.amazon.com/>
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
Recharts: <https://recharts.org/en-US/api >
MUI: < https://mui.com/x/react-data-grid/>

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
git remote add origin https://github.com/Bambo0o0o/invtDashboard.git
git push -u origin main
<!-- Existed Repository -->
git remote add origin https://github.com/Bambo0o0o/invtDashboard.git
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
   1) Setup URL as : NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
6) Create {redux.tsx} file in app folder
   1) Copy code from EdRoh file to our {redux.tsx} file (52:15)
   ***This {redux.tsx} file is setup for NextJS and Used to store data from different session on local***
   ***What we will used {redux.tsx} file on our web page : ***
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
   2) Export schemas as :
      1) Product with : productId, name, price, rating, stockQuantity
      2) NewProduct with : name, price, rating, stockQuantity
      3) SalesSummary with : salesSummaryId, totalValue, changePercentage, date
      4) ...
      5) ...
      6) User with : userId, name, email
   3) Create api function to callBack each schemas as : "DashboardMetrics", "Products", "Users", "Expenses"
   4) Create "endpoint" function to query each url : getDashboardMetrics, getProducts, createProduct, getUsers, getExpensesByCategory
   5) Export variables {useGetDashboardMetricsQuery, useGetProductsQuery, useCreateProductMutation,useGetUsersQuery, useGetExpensesByCategoryQuery} as : api

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