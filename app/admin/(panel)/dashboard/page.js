import { prisma } from "@/lib/prisma";

import styles from "@/components/Admin/Dashboard/Dashboard.module.css";

export default async function Dashboard() {

  const projectsCount = await prisma.project.count();

  const imagesCount = await prisma.projectImage.count();

  const featuresCount = await prisma.projectFeature.count();

  const about = await prisma.about.findFirst();

  const latestProjects = await prisma.project.findMany({

    orderBy: {
      createdAt: "desc",
    },

    take: 5,

    include: {
      images: true,
    },

  });

  return (

    <div className={styles.page}>

      <div className={styles.header}>

        <h1>Dashboard</h1>

        <p>

          Welcome to Dazal Design Studio Admin Panel

        </p>

      </div>

      <div className={styles.statsGrid}>

        <div className={styles.card}>

          <h3>Total Projects</h3>

          <h2>{projectsCount}</h2>

        </div>

        <div className={styles.card}>

          <h3>Total Images</h3>

          <h2>{imagesCount}</h2>

        </div>

        <div className={styles.card}>

          <h3>Total Features</h3>

          <h2>{featuresCount}</h2>

        </div>

        <div className={styles.card}>

          <h3>About Status</h3>

          <h2>

            {about ? "Configured" : "Empty"}

          </h2>

        </div>

      </div>

      <div className={styles.tableCard}>

        <h2>Latest Projects</h2>

        <table className={styles.table}>

          <thead>

            <tr>

              <th>Image</th>

              <th>Title</th>

              <th>Date</th>

            </tr>

          </thead>

          <tbody>

            {latestProjects.map((project) => (

              <tr key={project.id}>

                <td>

                  <img

                    src={
                      project.images?.[0]?.url ||
                      "/images/projects/default.jpg"
                    }

                    className={styles.image}

                    alt=""

                  />

                </td>

                <td>{project.title}</td>

                <td>

                  {new Date(

                    project.createdAt

                  ).toLocaleDateString()}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}