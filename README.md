This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Local dev setup

1. (recommended): Use vscode. Open from the .workspace file, not from the directory. Install the recommended plugins to get nice things like
   - Format on save
   - Local eslint server
   - Non-relative imports when autocompleting (@/_ rather than ../../_, etc.)
2. Use node 22.x
3. Run `npm install`
4. Setup Postgres+Prisma
   1. Have a postgresql server + database which you have admin access to. You likely want the server running locally, in which case install postgresql https://www.postgresql.org/ and setup a local db in e.g. pgAdmin
   2. Update the DATABASE_URL in `.env` to connect to your postgres server + database
   3. Run `npx prisma db push`. This sets up the database schema and generates the prisma javascript client in `src/lib/prismaClient`
   4. Run `npx prisma db seed`. This pushes seed data to your database
5. `npm run dev` starts the app at [http://localhost:3000](http://localhost:3000)
6. Go to http://localhost:3000/coach or http://localhost:3000/student to see the coach and student views. Update the COACH_ID or STUDENT_ID in the respective page.tsx files to view the app as a different coach or student
