var FSM = Ember.FSM;

describe('Ember.FSM', function() {
  it('should exist', function() {
    expect(FSM).toBeDefined();
  });

  it('imports Definition', function() {
    expect(FSM.Definition).toBeDefined();
  });

  it('imports Machine', function() {
    expect(FSM.Machine).toBeDefined();
  });

  it('imports Transition', function() {
    expect(FSM.Transition).toBeDefined();
  });

  it('imports Stateful', function() {
    expect(FSM.Stateful).toBeDefined();
  });

  it('imports reject', function() {
    expect(FSM.reject).toBeDefined();
  });
});
