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
        <div id="process-intro" className="col-12">
          <div className="col-6">
            For me, <span>Service Design</span> is about developing experiences
            from humans to humans. Transcending technocentric and user-only
            perspectives, service design deals with{" "}
            <span>humans and beyond</span>, thinking how our solutions will
            interact and impact the lives of users, customers, service staff,
            other stakeholders, the society around them and even the
            environment. Seeing solutions as service imply in a{" "}
            <span>holistic</span> view of the design process and its
            interdisciplinary participants. Design should be systemic, since
            every decision has multiple consequences, and the holistic service
            viewpoint is able to manage such trade-offs. These solutions derive
            from and unfold in human <span>experiences</span>, from initial
            exploratory experience of developing the solution to the final
            experience of using it, and with that retro-feeding the process.
          </div>
          <div className="col-6">
            This means that, in a service perspective, the{" "}
            <span>co-evolution</span> of problem and solution is key: we first
            need to identify the right problem and then seek the right solution.
            But while developing this solution our target problem is bound to
            change, gain new perspectives and nuances that will imply in new
            features and interpretations to our ever evolving solution. Lastly,
            Service Design is a <span>sequential process</span> and has two
            dimensions. One is external, helping teams to deliver value from
            end-to-end to all humans and beyond, while the other is internal,
            helping development teams transversally and ensuring the culture and
            practices of service design. We service designers, as mediators,
            have to trust our skills, insights and the process itself, because
            the Service Design process has in its core{" "}
            <span>making the world a better place for all</span>.
          </div>
        </div>
        <div id="process" className="col-10">
          <div id="img-div" className="col-10">
            <img src={processCycle} id="process-img" />
          </div>
          <div id="process-spaces" className="col-12">
            <div id="problem-space" className="col-6">
              <div className="process-title">Problem Space</div>
              <div className="process-body">
                In this space the team focus on maturing problems into an
                concise and clear opportuniry statement in a constant iteration
                between dicovering and defining.
                <div>
                  <span>Discover:</span> includes empathizing with people,
                  scoping opportunities of improvement and exploring technical
                  needs. Main questions to answered here are: which are the real
                  pains from humans involved in the solution we envision? Which
                  values are they expecting to become? How is the technical
                  state-of-the-art? What are my competitors doing?
                </div>
                <div>
                  <span>Define:</span> focus on framing the discoveries into a
                  plan of action, including scope, timeframe, metrics, risks and
                  plan of action. Main questions here are: What is out goal? How
                  will we measure it? Which pain points will we tackle? Will we
                  able to deliver what is expected with our current tech team?
                  Is is sustainable in the long run? Which risks are we taking?
                </div>
              </div>
            </div>
            <div id="solution-space" className="col-6">
              <div className="process-title">Solution Space</div>
              <div className="process-body">
                Having goals and plans, the team enters this space seeking for
                means of achieving solutions that fulfill the project statement,
                with a mindset of developing services that improve peoples
                lives.
                <div>
                  <span>Develop:</span> aaa
                </div>
                <div>
                  <span>Deliver:</span> aaa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    return process
  }
}
export default Process
