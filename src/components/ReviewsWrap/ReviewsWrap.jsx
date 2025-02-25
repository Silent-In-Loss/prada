import React from "react";
import s from "./ReviewsWrap.module.scss";
import Arrivels from "../Arrivels/Arrivels";
import TopSelling from "../TopSelling/TopSelling";
import About from "../About/About";
import Footer from "../Footer/Footer";

const ReviewsWrap = () => {
  return (
    <>
      <section className={s.reviewswrap}>
        <div className="container">
          <div className={s.filter}>
            <div className={s.text}>
              <b>All Reviews </b>
              <p>(451)</p>
            </div>

            <div className={s.buttons}>
              <button></button>
              <button>Latest </button>
              <button>Write a Review</button>
            </div>
          </div>

          <div className={s.wrap}>
            <div className={s.card}>
              <div>
                <p>⭐⭐⭐⭐</p>
                <img src="/dot.svg" alt="" />
              </div>

              <h3>Samantha D. ✅</h3>
              <p>
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <b>Posted on August 14, 2023</b>
            </div>

            <div className={s.card}>
              <div>
                <p>⭐⭐⭐⭐</p>
                <img src="/dot.svg" alt="" />
              </div>

              <h3>Ethan R. ✅</h3>
              <p>
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <b>Posted on August 15, 2023</b>
            </div>

            <div className={s.card}>
              <div>
                <p>⭐⭐⭐⭐</p>
                <img src="/dot.svg" alt="" />
              </div>

              <h3>Liam K. ✅</h3>
              <p>
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <b>Posted on April 1, 2023</b>
            </div>

            <div className={s.card}>
              <div>
                <p>⭐⭐⭐⭐</p>
                <img src="/dot.svg" alt="" />
              </div>

              <h3>Alex M. ✅</h3>
              <p>
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <b>Posted on June 23, 2023</b>
            </div>

            <div className={s.card}>
              <div>
                <p>⭐⭐⭐⭐</p>
                <img src="/dot.svg" alt="" />
              </div>

              <h3>Olivia P. ✅</h3>
              <p>
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <b>Posted on December 26, 2023</b>
            </div>

            <div className={s.card}>
              <div>
                <p>⭐⭐⭐⭐</p>
                <img src="/dot.svg" alt="" />
              </div>

              <h3>Ava H. ✅</h3>
              <p>
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <b>Posted on August 23, 2023</b>
            </div>
          </div>
          <div className={s.mainBtn}>
            <button>Load More Reviews</button>
          </div>

          <section className={s.also}>
            <h1>You might also like</h1>

            <div className={s.cards}>
              <div className={s.card}>
                <img src="/Frame8.png" alt="" />
                <p>T-SHIRT WITH TAPE DETAILS</p>
                <div className={s.marks}>
                  <img src="/Frame6.svg" alt="" />
                  <p>4.5/5</p>
                </div>
                <div className={s.price}>
                  <h4>$212</h4>
                  <s>$232</s>
                  <p>-20%</p>
                </div>
              </div>
              <div className={s.card}>
                <img src="/Frame9.png" alt="" />
                <p>SKINNY FIT JEANS</p>
                <div className={s.marks}>
                  <img src="/Frame7.svg" alt="" />
                  <p>3.5/5</p>
                </div>
                <h4>$145</h4>
              </div>
              <div className={s.card}>
                <img src="/Frame10.png" alt="" />
                <p>CHECKERED SHIRT</p>
                <div className={s.marks}>
                  <img src="/Frame5.svg" alt="" />
                  <p>4.5/5</p>
                </div>
                <h4>$80</h4>
              </div>
              <div className={s.card}>
                <img src="/Frame11.png" alt="" />
                <p>SLEEVE STRIPED T-SHIRT</p>
                <div className={s.marks}>
                  <img src="/Frame6.svg" alt="" />
                  <p>4.5/5</p>
                </div>
                <h4>$80</h4>
              </div>
            </div>
          </section>
        </div>

      </section>
      
    </>
  );
};

export default ReviewsWrap;
