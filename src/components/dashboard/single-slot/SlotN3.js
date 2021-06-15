import React from "react";

const SlotN3 = () => (
  <div className="row detcont">
    <div className="col">
      <div className="border-gradient btn-nav">
        <div className="border-gradient_content">
          <div className="btn-nav_prev">
            <a href="https://supersage.io/detail/x3/14/5/">
              <i className="fas fa-chevron-circle-left" />
            </a>
            <span className="btn-nav_page">5 </span>
          </div>
          <div className="btn-nav_next">
            <span className="btn-nav_page">7 </span>
            <a href="https://supersage.io/detail/x3/14/7/">
              <i className="fas fa-chevron-circle-right" />
            </a>
          </div>
          <div
            className="logotypeX3"
            style={{
              marginLeft: "-50px"
            }}
          >
            <img src="/img/x3.svg" alt />
          </div>
          <div className="user_id">
            <a href="https://supersage.io/detail/x3/7/6">7</a>
          </div>
          <div className="user-matrix_ternary">
            <div className="user-matrix_root user-matrix_root__active">
              <div className="user-matrix__active">
                <div className="user-matrix_level" title="Platform">
                  6
                </div>
                <div className="user-matrix_id">
                  <a
                    href="https://supersage.io/detail/x3/14/6"
                    className="trigger_value__user-id"
                  >
                    ID <span>14 </span>
                  </a>
                </div>
              </div>
              <div className="user-matrix_reinvest" title>
                <span className="user-matrix_reinvest__nav">
                  <a
                    href="https://supersage.io/detail/x3/14/6/2"
                    className="user-matrix_reinvest__nav-next"
                    title="A higher level"
                  >
                    <i className="fa fa-chevron-up" />
                  </a>
                  <a
                    href="https://supersage.io/detail/x3/14/6/1"
                    className="user-matrix_reinvest__nav-prev"
                    title="Lower level"
                  >
                    <i className="fa fa-chevron-down" />
                  </a>
                </span>
                <span data-spoiler=".user-matrix_reinvest__popup">
                  <span className="user-matrix_reinvest__tip">
                    HISTORY <i className="fas fa-database" />
                  </span>
                  <i className="matrix-icon_sync" />0
                </span>
                <div className="user-matrix_reinvest__popup">
                  <select
                    name
                    id="changeCurrentReinvest"
                    className="form-control"
                    style={{}}
                  ></select>
                </div>
              </div>
              <div className="user-matrix_partners" title="Total parntners">
                <a>
                  <i className="matrix-icon_users" />2{" "}
                </a>
              </div>
            </div>
            <div className="user-matrix__branchs">
              <div />
              <div />
              <div />
            </div>
            <div className="user-matrix_children">
              <div
                className="user-matrix_wrapper_popup matrix-children__active "
                title
              >
                <span className="user-matrix_children_count">
                  <a
                    href="https://supersage.io/detail/x3/6247/6/"
                    className="fsz-15"
                  >
                    6247{" "}
                  </a>
                </span>
                <span className="user-matrix_partners__count">
                  <i className="matrix-icon_users" />
                  <span>6</span>
                </span>
                <span className="user-matrix_popup">
                  <span>
                    <i className="matrix-icon_users" />
                    <span>6</span>
                  </span>
                  <span>
                    <i className="matrix-icon_sync" />
                    <span>2</span>
                  </span>
                </span>
              </div>
              <div
                className="user-matrix_wrapper_popup matrix-children__active "
                title
              >
                <span className="user-matrix_children_count">
                  <a
                    href="https://supersage.io/detail/x3/6247/6/"
                    className="fsz-15"
                  >
                    6247{" "}
                  </a>
                </span>
                <span className="user-matrix_partners__count">
                  <i className="matrix-icon_users" />
                  <span>6</span>
                </span>
                <span className="user-matrix_popup">
                  <span>
                    <i className="matrix-icon_users" />
                    <span>6</span>
                  </span>
                  <span>
                    <i className="matrix-icon_sync" />
                    <span>2</span>
                  </span>
                </span>
              </div>
              <div
                className="user-matrix_wrapper_popup matrix-children__nonactive "
                title
              >
                <span className="user-matrix_children_count"></span>
                <span className="user-matrix_partners__count">
                  <i className="matrix-icon_users" />
                  <span>0</span>
                </span>
                <span className="user-matrix_popup">
                  <span>
                    <i className="matrix-icon_users" />
                    <span>0</span>
                  </span>
                  <span>
                    <i className="matrix-icon_sync" />
                    <span>0</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SlotN3;
