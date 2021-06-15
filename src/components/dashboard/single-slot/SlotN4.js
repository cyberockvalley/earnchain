import React from "react";

const SlotN4 = () => (
  <div className="row detcont">
    <div className="col">
      <div className="border-gradient btn-nav">
        <div className="border-gradient_content">
          <div className="btn-nav_prev">
            <a href="https://supersage.io/detail/x6/3/8/">
              <i className="fas fa-chevron-circle-left" />
            </a>
            <span className="btn-nav_page">8 </span>
          </div>
          <div className="btn-nav_next">
            <span className="btn-nav_page">10 </span>
            <a href="https://supersage.io/detail/x6/3/10/">
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
            <a href="https://supersage.io/detail/x6/1/9">1</a>
          </div>
          <div className="user-matrix_binary">
            <div className="user-matrix_root user-matrix_root__active">
              <div className="user-matrix__active">
                <div className="user-matrix_level" title="Platform">
                  9
                </div>
                <div className="user-matrix_id">
                  <a
                    href="https://supersage.io/detail/x6/3/9"
                    className="trigger_value__user-id"
                  >
                    {" "}
                    ID <span> 3 </span>{" "}
                  </a>
                </div>
              </div>
              <div className="user-matrix_reinvest" title>
                <span className="user-matrix_reinvest__nav">
                  <a
                    href="https://supersage.io/detail/x6/3/9/2"
                    className="user-matrix_reinvest__nav-next"
                    title="A higher level"
                  >
                    <i className="fa fa-chevron-up" />
                  </a>
                  <a
                    href="https://supersage.io/detail/x6/3/9/1"
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
                  <i className="matrix-icon_sync" />1
                </span>
                <div className="user-matrix_reinvest__popup">
                  <select
                    name
                    id="changeCurrentReinvest"
                    className="form-control"
                    style={{}}
                  >
                    <option selected value={0}>
                      0
                    </option>
                    <option value={1}>1</option>
                  </select>
                </div>
              </div>
              <div className="user-matrix_partners" title="Total parntners">
                <a>
                  <i className="matrix-icon_users" />9{" "}
                </a>
              </div>
            </div>
            <div className="user-matrix__branchs">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="user-matrix_children user-matrix_children__level-1">
              <div
                className="user-matrix_wrapper_popup matrix-children__overflow "
                title
              >
                <span className="user-matrix_children_count">
                  <a
                    href="https://supersage.io/detail/x6/11392/9/"
                    className="fsz-15"
                  >
                    11392{" "}
                  </a>
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
              <div
                className="user-matrix_wrapper_popup matrix-children__overflow "
                title
              >
                <span className="user-matrix_children_count">
                  <a
                    href="https://supersage.io/detail/x6/24448/9/"
                    className="fsz-15"
                  >
                    24448{" "}
                  </a>
                </span>
                <span className="user-matrix_popup">
                  <span>
                    <i className="matrix-icon_users" />
                    <span>2</span>
                  </span>
                  <span>
                    <i className="matrix-icon_sync" />
                    <span>0</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="user-matrix_children user-matrix_children__level-2">
              <div
                className="user-matrix_wrapper_popup matrix-children__nonactive "
                title
              >
                <span className="user-matrix_children_count"></span>
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
              <div
                className="user-matrix_wrapper_popup matrix-children__nonactive "
                title
              >
                <span className="user-matrix_children_count"></span>
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
              <div
                className="user-matrix_wrapper_popup matrix-children__overflow_partner "
                title
              >
                <span className="user-matrix_children_count">
                  <a
                    href="https://supersage.io/detail/x6/24563/9/"
                    className="fsz-15"
                  >
                    24563{" "}
                  </a>
                </span>
                <span className="user-matrix_popup">
                  <span>
                    <i className="matrix-icon_users" />
                    <span>3</span>
                  </span>
                  <span>
                    <i className="matrix-icon_sync" />
                    <span>0</span>
                  </span>
                </span>
              </div>
              <div
                className="user-matrix_wrapper_popup matrix-children__nonactive "
                title
              >
                <span className="user-matrix_children_count"></span>
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

export default SlotN4;
