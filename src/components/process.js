import React, { Component } from "react"
import processCycle from "../../static/processcycle.png"

class Process extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {}

  render() {
    let process = (
      <div id="process-div" className="row">
        <div id="process" className="col-9">
          <div id="img-div" className="col-12">
            <img src={processCycle} id="process-img" />
          </div>
          <div id="process-spaces" className="col-12">
            <div id="problem-space" className="col-6">
              <div className="process-title">Problem Space</div>
            </div>
            <div id="solution-space" className="col-6">
              <div className="process-title">Solution Space</div>
            </div>{" "}
          </div>
        </div>
        <div id="process-intro" className="col-3">
          For me, <span>Service Design</span> is about humans, experiences,
          holism, co-evolution and process. Transcending the user-only
          perspective, service design deals with <span>humans and beyond</span>,
          thinking how my solution will interact and impact the lives of users,
          customers, service staff, third parties, stake- and shareholders, the
          society around them and even the environment. experiences holism
          Co-evolution is bounded by the paralel Focus not only on the solution,
          but also in finding the right problem to be solved. What are real
          pains, not the goals with biased views. Co-evolution of problem and
          solution. I believe the Service Design process has two dimensions. One
          is external, helping teams to deliver value from end-to-end to all
          humans and beyond. But the seccond internal perspective is just as
          important, helping development teams transversaly and ensurin the
          culture and practices of service design.
        </div>
      </div>
    )
    return process
  }
}
export default Process
