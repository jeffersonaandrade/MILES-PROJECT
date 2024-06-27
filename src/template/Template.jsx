import PropTypes from "prop-types";

function Template({ children }) {
  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      <div className="py-4 lg:py-8 lg:px-8 flex flex-col items-center max-w-screen-2xl w-full overflow-auto">
        {children}
      </div>
    </div>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
