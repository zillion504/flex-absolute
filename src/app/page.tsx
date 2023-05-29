import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={[styles.container, styles.nav].join(" ")}>
        <div className={styles.horizontal_stack}>
          <div className={styles.horizontal_stack}>
            <Image src="/logo.png" alt="logo" width="50" height="50" style={{
              transform: "translateY(15px)"
            }} />
            <h2>
              Arcenergy
            </h2>
          </div>
          <div className={styles.horizontal_stack} style={{
            paddingLeft: "2rem"
          }}>
            <a className={styles.nav_link}>About</a>
            <a className={styles.nav_link}>Platform</a>
            <a className={styles.nav_link}>Contact</a>
          </div>
        </div>

        <div className={styles.horizontal_stack}>
          <a className={styles.nav_link}>Login</a>
        </div>
      </nav>

      <div className={styles.container}>
        <div className={styles.col_2} style={{
          aspectRatio: "2 / 1"
        }}>
          <div className={styles.col_left}>
            <h1>Can climate change effects be stopped?</h1>
            <h2>
              All our methodology opens up a cleaner path forward for every everyday consumers.
            </h2>
            <div className={styles.horizontal_stack} style={{
              justifyContent: "flex-start"
            }}>
              <button>Get started</button>
              <button>Play</button>
              <p>
                {"Let's see how we did it."}
              </p>
            </div>
          </div>
          <div className={styles.col_right}>
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "20%",
                width: "35%",
                aspectRatio: "1 / 1",
                border: "1px solid #fff",
                padding: "1rem",
                zIndex: 1
              }}
            >
              <h2>
                20%
              </h2>
              <p>Increase</p>
              <p>Clean energy</p>
            </div>

            <div
              style={{
                position: "absolute",
                left: "0",
                top: "22.5%",
                borderRadius: "100px",
                backgroundColor: "#ddef46",
                padding: "1rem 2rem",
                color: "#111",
                zIndex: 2
              }}
            >
              <p>40% less energy</p>
            </div>

            <div
              style={{
                position: "absolute",
                left: "45%",
                right: "10%",
                top: "10%",
                bottom: "20%",
                backgroundColor: "#000",
                zIndex: 3
              }}
            >
              <div style={{
                position: "absolute",
                top: "-10%",
                left: "0",
                right: "0",
                bottom: "0"
              }}>
                <Image src="/man.png" alt="test" fill style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div style={{
              position: "absolute",
              right: "5%",
              bottom: "25%",

              width: "10%",
              height: "10%",
              backgroundColor: "#fff",
              borderRadius: "100px",
              display: "flex",
              padding: "1rem",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 4
            }}>
              <div style={{
                position: "relative",
                width: "100%",
                height: "100%"
              }}>
                <Image src="/star.png" alt="star" fill/>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                left: "0",
                width: "45%",
                top: "55%",
                height: "45%",
                backgroundColor: "#fff",
                zIndex: 3,
                color: "#111",
                padding: "2rem"
              }}
            >
              <Image src="/leaf-icon.png" alt="leaf" width="50" height="50" />
              <h2 style={{
                marginTop: "1rem"
              }}>
                New energy with proven zero pollution
              </h2>
            </div>

            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "92.5%",
                right: "2.5%",
                bottom: "20%",
                writingMode: "vertical-lr"
              }}
            >
              Read success stories
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
